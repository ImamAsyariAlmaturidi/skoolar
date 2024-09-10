"use server";
import { auth } from "../../../../../auth";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { google } from "googleapis";
import Joi from "joi";
import { redirect } from "next/navigation";
import { getGroup } from "../../../../../db/models/Group";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../../config/firebase";
import { revalidatePath } from "next/cache";
import { getMe } from "../../../parent/action";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// === ganti ===
// ganti session jadi adaptor
const session = await auth();

export const getCourse = async () => {
  if (!session || !session.accessToken) {
    //ini harusnya ngambil access token baru pake refresh token
    // return "Not authenticated";
    return session;
  }

  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.AUTH_GOOGLE_ID,
      process.env.AUTH_GOOGLE_SECRET
    );
    oauth2Client.setCredentials({ access_token: session.accessToken });

    const classroom = google.classroom({ version: "v1", auth: oauth2Client });
    // console.log(classroom.courses, "ini object courses");

    const response = await classroom.courses.list();

    return response.data.courses;
  } catch (error) {
    console.log(error, "oopsie, something's wrong");
  }
};
// === ganti ===

// Baru
export const getAllGroup = async () => {
  const groups = await getGroup();
  return groups;
};

const schemaCourseWorkInput = Joi.object({
  title: Joi.string().required().min(2),
  description: Joi.string().required().min(5),
  duedate: Joi.string().required(),
  duetime: Joi.string().required(),
  courseName: Joi.string().required(),
});

export const createCourseWork = async (formData) => {
  const data = await getMe();

  const title = formData?.get("title");
  const description = formData?.get("description");
  const duedate = formData?.get("duedate");
  const duetime = formData?.get("duetime");
  const courseData = formData?.get("course");
  const courseId = courseData.split(",")[0];
  const courseName = courseData.split(",")[1];

  const parsedData = schemaCourseWorkInput.validate({
    title,
    description,
    duedate,
    duetime,
    courseName,
  });
  if (parsedData.error) {
    const errPath = parsedData.error.details[0].path[0];
    const errMessage = parsedData.error.details[0].message;
    const errFinalMessage = `${errPath} - ${errMessage}`;

    return redirect(
      `${BASE_URL}/dashboard/teacher/assignment/add-assignment?error=${errFinalMessage}`
    );
  }

  console.log(parsedData, "<< ini parsed data");
  const splitDueDate = parsedData.value.duedate.split("-");
  const splitDueTime = parsedData.value.duetime.split(":");
  console.log(splitDueDate, "<< ini splitduedate");
  console.log(splitDueTime, "<< ini splitduetime");

  if (!session || !session.accessToken) {
    //ini harusnya ngambil access token baru pake refresh token
    return "Not authenticated";

    // return session;
  }

  // const { payload } = await jwtVerify(
  //   access_token.value,
  //   new TextEncoder().encode(ACCESS_TOKEN_SECRET)
  // );
  // console.log(payload, "<< ini payload token di formClassroom/action");
  const oauth2Client = new google.auth.OAuth2(
    process.env.AUTH_GOOGLE_ID,
    process.env.AUTH_GOOGLE_SECRET
  );
  oauth2Client.setCredentials({ access_token: session.accessToken });
  console.log(oauth2Client, "<< INI OAUTH2Client");
  const coursework = {
    title: title,
    description: description,
    state: "PUBLISHED",
    workType: "ASSIGNMENT",
    materials: [],
    maxPoints: 100,
    dueDate: {
      year: splitDueDate[0],
      month: splitDueDate[1],
      day: splitDueDate[2],
    },
    dueTime: {
      hours: splitDueTime[0],
      minutes: splitDueTime[1],
    },
  };
  const classroom = google.classroom({
    version: "v1",
    auth: oauth2Client,
  });
  const response = await classroom.courses.courseWork.create({
    courseId: courseId,
    requestBody: coursework,
  });
  const colRef = collection(db, "assignment");

  addDoc(colRef, {
    courseId: response?.data.courseId,
    courseworkId: response?.data.id,
    courseName: courseName,
    description: response?.data.description,
    dueDate: response?.data.dueDate,
    dueTime: {
      hours: splitDueTime[0],
      minutes: splitDueTime[1],
    },
    groupId: data.GroupId,
    title: response?.data.title,
  });

  revalidatePath("/dashboard/teacher/assignment");
  redirect("/dashboard/teacher/assignment");

  // return response.data.courses;
};

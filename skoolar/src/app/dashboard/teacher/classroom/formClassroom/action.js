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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

const cookiesStore = cookies();
const access_token = cookiesStore.get("access_token");
console.log(access_token, "ini access_token di formClassroom/action");

const { payload } = await jwtVerify(
  access_token.value,
  new TextEncoder().encode(ACCESS_TOKEN_SECRET)
);
console.log(
  payload,
  "<< ini payload hasil ekstrak token di formClassroom/action"
);

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

console.log(payload, "<< ini payload token di formClassroom/action");

const schemaCourseWorkInput = Joi.object({
  title: Joi.string().required().min(2),
  description: Joi.string().required().min(5),
  duedate: Joi.string().required(),
  duetime: Joi.string().required(),
  course: Joi.string().required(),
});

export const createCourseWork = async (formData) => {
  const cookiesStore = cookies();
  const access_token = cookiesStore.get("access_token");

  console.log(access_token, "ini access token");
  console.log(formData?.get("title"), "<< ini formData title");
  console.log(formData?.get("description"), "<< ini formData description");
  console.log(formData?.get("duedate"), "<< ini formData duedate");
  console.log(formData?.get("duetime"), "<< ini formData duetime");
  console.log(formData?.get("course"), "<< ini formData course");
  console.log(formData?.get("group"), "<< ini formData group");

  const title = formData?.get("title");
  const description = formData?.get("description");
  const duedate = formData?.get("duedate");
  const duetime = formData?.get("duetime");
  const course = formData?.get("course");
  const group = formData?.get("group");

  const parsedData = schemaCourseWorkInput.validate({
    title,
    description,
    duedate,
    duetime,
    course,
  });
  if (parsedData.error) {
    const errPath = parsedData.error.details[0].path[0];
    const errMessage = parsedData.error.details[0].message;
    const errFinalMessage = `${errPath} - ${errMessage}`;

    return redirect(`${BASE_URL}/login?error=${errFinalMessage}`);
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
  console.log(session, "<<<< ini session di page");
  console.log(session.accessToken, "<<<< ini ACCESS TOKEN di page");

  try {
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
      courseId: parsedData.value.course,
      requestBody: coursework,
    });
    const colRef = collection(db, "assignment");

    addDoc(colRef, {
      courseId: response?.data.courseId,
      courseworkId: response?.data.id,
      description: response?.data.description,
      dueDate: response?.data.dueDate,
      dueTime: response?.data.dueTime,
      groupId: payload.GroupId,
      title: response?.data.title,
    });
    console.log(response, "<< ini response");
    return response.data.courses;
  } catch (error) {
    console.log(error);
  }
};

// {
//   config: {
//     url: 'https://classroom.googleapis.com/v1/courses/711529342192/courseWork',
//     method: 'POST',
//     apiVersion: '',
//     userAgentDirectives: [ [Object] ],
//     paramsSerializer: [Function (anonymous)],
//     data: {
//       title: 'Percobaan Malam-1',
//       description: 'ini percobaan pas malam, ngantuk bat bjir',
//       state: 'PUBLISHED',
//       workType: 'ASSIGNMENT',
//       materials: [],
//       maxPoints: 100,
//       dueDate: [Object],
//       dueTime: [Object]
//     },
//     headers: {
//       'x-goog-api-client': 'gdcl/7.2.0 gl-node/20.12.2',
//       'Accept-Encoding': 'gzip',
//       'User-Agent': 'google-api-nodejs-client/7.2.0 (gzip)',
//       Authorization: 'Bearer ya29.a0AcM612xn7PfGmA1NNpugdq6Kjk5nbW5jaFpRb0T7pG3JZaQziWHfpSnmyXPCj3Oz6x0JKIyM8DXiTWV1pQ4BflcS2wyKvDK_gHIDSip_TPKZqVg6MIR7V_wlCqGSGhKrBfbCp9fgz0CRUceVu354JKW_dWDzv2fCxn2fVDSsaCgYKAQ8SARASFQHGX2MieWJ0AFfJg3jb9-0LnK_diA0175',
//       'Content-Type': 'application/json'
//     },
//     params: {},
//     validateStatus: [Function (anonymous)],
//     retry: true,
//     body: '{"title":"Percobaan Malam-1","description":"ini percobaan pas malam, ngantuk bat bjir","state":"PUBLISHED","workType":"ASSIGNMENT","materials":[],"maxPoints":100,"dueDate":{"year":"2024","month":"09","day":"11"},"dueTime":{"hours":"10","minutes":"00"}}',
//     responseType: 'unknown',
//     errorRedactor: [Function: defaultErrorRedactor]
//   },
//   data: {
//     courseId: '711529342192',
//     id: '705770072837',
//     title: 'Percobaan Malam-1',
//     description: 'ini percobaan pas malam, ngantuk bat bjir',
//     state: 'PUBLISHED',
//     alternateLink: 'https://classroom.google.com/c/NzExNTI5MzQyMTky/a/NzA1NzcwMDcyODM3/details',
//     creationTime: '2024-09-09T15:25:09.371Z',
//     updateTime: '2024-09-09T15:25:08.611Z',
//     dueDate: { year: 2024, month: 9, day: 11 },
//     dueTime: { hours: 10 },
//     maxPoints: 100,
//     workType: 'ASSIGNMENT',
//     submissionModificationMode: 'MODIFIABLE_UNTIL_TURNED_IN',
//     assignment: { studentWorkFolder: [Object] },
//     associatedWithDeveloper: true,
//     assigneeMode: 'ALL_STUDENTS',
//     creatorUserId: '100583021679285042104'
//   },
//   headers: {
//     'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
//     'cache-control': 'private',
//     'content-encoding': 'gzip',
//     'content-type': 'application/json; charset=UTF-8',
//     date: 'Mon, 09 Sep 2024 15:25:09 GMT',
//     server: 'ESF',
//     'transfer-encoding': 'chunked',
//     vary: 'Origin, X-Origin, Referer',
//     'x-content-type-options': 'nosniff',
//     'x-frame-options': 'SAMEORIGIN',
//     'x-xss-protection': '0'
//   },
//   status: 200,
//   statusText: 'OK',
//   request: {
//     responseURL: 'https://classroom.googleapis.com/v1/courses/711529342192/courseWork'
//   }
// } << ini response

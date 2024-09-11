"use server";
import { cookies } from "next/headers";

export async function getGroupByID(groupID) {
  try {
    const res = await fetch(`http://localhost:3000/api/group/${groupID}`, {
      cache: "no-store",
      method: "GET",
      headers: {
        Cookie: cookies().toString(),
      },
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
}

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

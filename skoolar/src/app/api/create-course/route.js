import { google } from "googleapis";
import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from '../auth/[...auth]/route';

export async function GET() {
  const oauth2Client = new google.auth.OAuth2(
    "964083973412-t80v9ccvbv27pa00n5l8rg8adlqn5jnr.apps.googleusercontent.com",
    "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",
    "http://localhost:3000/api/auth/callback/google"
  );
  oauth2Client.setCredentials({ access_token: session.accessToken });

  const classroom = google.classroom({ version: "v1", auth: oauth2Client });

  try {
    const response = await classroom.courses.create({
      requestBody: {
        name: "New Course",
        section: "Section 1",
        descriptionHeading: "Course Description",
        description: "This is a new course",
        room: "Room 101",
        ownerId: "me",
        courseState: "ACTIVE",
      },
    });
    // console.log(response);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

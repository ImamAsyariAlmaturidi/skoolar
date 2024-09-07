import { auth, signIn, signOut } from "../../auth";
import { google } from "googleapis";
import { getCourse, createCourse, createCourseWork } from "./action";

export default async function Courses() {
  // const session = await auth();

  // async function handler() {
  //   if (!session || !session.accessToken) {
  //     //ini harusnya ngambil access token baru pake refresh token
  //     // return "Not authenticated";
  //     return session;
  //   }

  //   try {
  //     const oauth2Client = new google.auth.OAuth2(
  //       process.env.AUTH_GOOGLE_ID,
  //       process.env.AUTH_GOOGLE_SECRET
  //     );
  //     oauth2Client.setCredentials({ access_token: session.accessToken });

  //     const classroom = google.classroom({ version: "v1", auth: oauth2Client });
  //     // console.log(classroom.courses, "ini object courses");

  //     const response = await classroom.courses.list();

  //     return response.data.courses;
  //   } catch (error) {
  //     console.log(error, "ini error");
  //   }
  // }

  // async function courseWorkCreateHandler() {
  //   "use server";
  //   if (!session || !session.accessToken) {
  //     //ini harusnya ngambil access token baru pake refresh token
  //     return "Not authenticated";

  //     // return session;
  //   }
  //   console.log(session, "<<<< ini session di page");
  //   console.log(session.accessToken, "<<<< ini ACCESS TOKEN di page");

  //   try {
  //     const oauth2Client = new google.auth.OAuth2(
  //       process.env.AUTH_GOOGLE_ID,
  //       process.env.AUTH_GOOGLE_SECRET
  //     );
  //     oauth2Client.setCredentials({ access_token: session.accessToken });
  //     console.log(oauth2Client, "<< INI OAUTH2Client");

  //     const coursework = {
  //       title: "Sample Coursework",
  //       description: "This is a sample coursework description",
  //       state: "PUBLISHED", // 'PUBLISHED', 'DRAFT', or 'DELETED'
  //       workType: "ASSIGNMENT", // or 'SHORT_ANSWER_QUESTION', 'MULTIPLE_CHOICE_QUESTION'
  //       materials: [], // Optional
  //       maxPoints: 100, // Optional
  //       dueDate: {
  //         year: 2024,
  //         month: 9,
  //         day: 30,
  //       },
  //       dueTime: {
  //         hours: 23,
  //         minutes: 59,
  //       },
  //     };
  //     const classroom = google.classroom({
  //       version: "v1",
  //       auth: oauth2Client,
  //       // params: {
  //       //   courseId: "711051234376",
  //       // },
  //     });
  //     const response = await classroom.courses.courseWork.create({
  //       courseId: "711051234376",
  //       requestBody: coursework,
  //       // requestBody: {
  //       //   // courseId: "711051234376",
  //       //   title: "pelajaran mtk",
  //       //   materials: [
  //       //     {
  //       //       link: {
  //       //         url: "https://www.youtube.com/watch?v=0ORbhG0Ozac",
  //       //       },
  //       //     },
  //       //   ],
  //       //   state: "PUBLISHED",
  //       //   maxPoints: 100,
  //       //   workType: "ASSIGNMENT",
  //       // },
  //     });

  //     console.log(response);

  //     return response.data.courses;
  //   } catch (error) {
  //     console.log(error, "ini error");
  //   }
  // }
  // async function courseCreate() {
  //   "use server";
  //   if (!session || !session.accessToken) {
  //     //ini harusnya ngambil access token baru pake refresh token
  //     return "Not authenticated";

  //     // return session;
  //   }
  //   console.log(session, "<<<< ini session di page");
  //   console.log(session.accessToken, "<<<< ini ACCESS TOKEN di page");

  //   try {
  //     const oauth2Client = new google.auth.OAuth2(
  //       process.env.AUTH_GOOGLE_ID,
  //       process.env.AUTH_GOOGLE_SECRET
  //     );
  //     oauth2Client.setCredentials({ access_token: session.accessToken });
  //     console.log(oauth2Client, "<< INI OAUTH2Client");

  //     const classroom = google.classroom({
  //       version: "v1",
  //       auth: oauth2Client,
  //     });
  //     const response = await classroom.courses.create({
  //       requestBody: {
  //         name: "Bii 22",
  //         section: "A",
  //         descriptionHeading: "Introduction to Mathematics",
  //         description: "Learn basic math skills",
  //         room: "101",
  //         ownerId: "me",
  //       },
  //     });

  //     return response.data.courses;
  //   } catch (error) {
  //     console.log(error, "ini error");
  //   }
  // }

  let courses = await getCourse();
  console.log(courses);

  return (
    <div>
      <h1>Google Classroom Courses</h1>
      <ul>
        {courses?.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>

      <form action={createCourseWork}>
        <button type="submit"> add course work</button>
      </form>
      <form action={createCourse}>
        <button type="submit"> Tambah Kelas</button>
      </form>
    </div>
  );
}

import { cookies } from "next/headers";
import { createCourseWork, getCourse, getAllGroup } from "./action";
import { auth, signIn, signOut } from "../../../../../auth";
import { redirect } from "next/navigation";

export default async function page() {
  const store = cookies();
  const token = store.get("access_token");

  if (!token.value) {
    redirect("/login");
  }

  const session = await auth();

  if (!session) {
    return (
      <>
        <h1>You've not login yet bruv</h1>
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button type="submit">Sign In from google</button>
        </form>
      </>
    );
  }

  const courses = await getCourse();

  return (
    <>
      <form action={createCourseWork}>
        <div className="flex flex-col">
          <label htmlFor="title">Title CourseWork</label>
          <input type="text" name="title" placeholder="Title" />
          <label htmlFor="description">Description CourseWork</label>
          <input type="text" name="description" placeholder="Description" />
          <label htmlFor="duedate">Due To Date</label>
          <input type="date" name="duedate" />
          <label htmlFor="duetime">Due To Time</label>
          <input type="time" name="duetime" />
          <label htmlFor="course">Course:</label>
          <select name="course" id="course">
            {courses?.map((course) => {
              if (course.courseState === "ACTIVE") {
                return (
                  <option value={[course.id, course.name]} key={course.id}>
                    {course.name}
                  </option>
                );
              }
            })}
          </select>
          <button type="submit">Add Course</button>
        </div>
      </form>
    </>
  );
}

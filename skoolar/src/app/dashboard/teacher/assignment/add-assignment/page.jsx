import { cookies } from "next/headers";
import { createCourseWork, getCourse, getAllGroup } from "./action";
import { auth, signIn, signOut } from "../../../../../auth";
import { redirect } from "next/navigation";
import TeacherSideBar from "../../../../../components/teacher/Sidebar";

export default async function page() {
  const store = cookies();
  const token = store.get("access_token");

  if (!token) {
    redirect("/login");
  }

  const session = await auth();

  if (!session) {
    return (
      <>
        <div className="w-full h-screen bg-[#f0f6fe] flex justify-center items-center">
          <div>
            <h1 className="text-2xl text-neutral-600">
              I'm Sorry , It seems Like you havent login yet , please log in
              first
            </h1>
            <form
              className="border-2 w-60 rounded-2xl px-5 mt-7 ml-56 text-[1.5rem] text-neutral-600"
              action={async () => {
                "use server";
                await signIn();
              }}
            >
              <button type="submit">Sign In from google</button>
            </form>
          </div>
        </div>
      </>
    );
  }

  const courses = await getCourse();

  return (
    <>
      <div className="w-full h-screen bg-[#f0f6fe] flex gap-3 px-5 py-10">
        <TeacherSideBar className="w-1/4 lg:w-1/5" />
        {/* <div className="w-[90%] bg-white rounded-3xl px-10 py-5 overflow-y-auto">
          <form
            action={createCourseWork}
            className="w-[30rem] h-[30rem] bg-black"
          >
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
        </div> */}
        <div className="w-[90%]  rounded-3xl px-10 py-5 overflow-y-auto flex justify-center items-center">
          <form
            action={createCourseWork}
            className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-xl"
          >
            <h2 className="text-2xl font-bold text-neutral-600 mb-6">
              Add Coursework
            </h2>

            <div className="space-y-2">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-neutral-600"
              >
                Title CourseWork
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                className="w-full px-3 py-3 bg-neutral-100  rounded-md text-neutral-500 outline-none  focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-neutral-600"
              >
                Description CourseWork
              </label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Description"
                className="w-full px-3 py-3 bg-neutral-100  rounded-md text-neutral-500 outline-none  focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="duedate"
                  className="block text-sm font-medium text-neutral-600"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="duedate"
                  name="duedate"
                  className="w-full px-3 py-3 bg-neutral-100  rounded-md text-neutral-500 outline-none  focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="duetime"
                  className="block text-sm font-medium text-neutral-600"
                >
                  Due Time
                </label>
                <input
                  type="time"
                  id="duetime"
                  name="duetime"
                  className="w-full px-3 py-3 bg-neutral-100  rounded-md text-neutral-500 outline-none  focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="course"
                className="block text-sm font-medium text-neutral-700"
              >
                Course
              </label>
              <select
                id="course"
                name="course"
                className="w-full px-3 py-3 bg-neutral-100 rounded-md text-zinc-100 outline-none ffocus:border-transparent"
              >
                <option value="" disabled selected className="text-zinc-400">
                  Select a course
                </option>
                {courses.map((course) => {
                  if (course.courseState === "ACTIVE") {
                    return (
                      <option
                        key={course.id}
                        value={`${course.id},${course.name}`}
                        className="text-zinc-100"
                      >
                        {course.name}
                      </option>
                    );
                  }
                })}
              </select>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-4 bg-blue-500 text-[0.9rem] font-semibold text-zinc-100 rounded-md transition duration-300 ease-in-out"
            >
              Add Course
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

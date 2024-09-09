import { createCourseWork, getCourse, getAllGroup } from "./action";

let courses = await getCourse();
// console.log(courses, "<< ini courses");
let groups = await getAllGroup();

export default function FormClassroomPage() {
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
          <label htmlFor="group">Group:</label>
          <select name="group" id="group">
            {groups?.map((group) => {
              group._id = group._id.toString();
              return (
                <option value={group._id} key={group._id}>
                  {group.name}
                  {group._id}
                </option>
              );
            })}
          </select>
          <label htmlFor="course">Course:</label>
          <select name="course" id="course">
            {courses?.map((course) => {
              if (course.courseState === "ACTIVE") {
                return (
                  <option value={course.id} key={course.id}>
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

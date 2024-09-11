import SideBarAdmin from "../../../components/SidebarAdmin";
import Link from "next/link";
import { getAllUser, getGroup, getParent } from "./action";
export default async function AdminDashboard() {
  const teachers = await getAllUser();
  // console.log(teachers, "ini data teachers");
  const students = await getParent();
  const groups = await getGroup();

  // const filteredTeachers = teachers
  //   ?.filter((teacher) => teacher.GroupId.length > 0)
  //   .map((teacher) => teacher.GroupId)
  //   .join(",");

  // // console.log(filteredTeachers, "inii di filter");
  // const newTeacherData = await getGroupTeacher(filteredTeachers);

  return (
    <>
      <div className=" w-full overflow-y-auto overflow-x-hidden">
        <div className="flex h-full flex-col w-full rounded-3xl overflow-y-auto overflow-x-hidden">
          <header className="flex justify-between items-center px-6 py-5 pt-4">
            <h1 className="text-2xl font-medium">Admin Dashboard</h1>
          </header>

          <div className="grid grid-cols-2 gap-6 px-6 h-full">
            {/* Teachers Table */}
            <div className="bg-white rounded-2xl p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium">Teachers</h2>
                <Link href={"/dashboard/admin/list-user"}>
                  <button
                    // onClick={toggleTeacherModal}
                    className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
                  >
                    Details
                  </button>
                </Link>
              </div>
              <table className="min-w-full table-auto border-collapse overflow-y-auto">
                <thead>
                  <tr className="bg-gray-100 text-sm font-medium">
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Class</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers?.slice(0, 5).map((teacher, index) => (
                    <tr key={index} className="text-sm">
                      <td className="border px-4 py-2">{teacher.name}</td>
                      <td className="border px-4 py-2">{teacher.GroupId}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Students Table */}
            <div className="bg-white rounded-2xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium">Students</h2>
                <Link href={"/dashboard/admin/list-user"}>
                  <button
                    // onClick={toggleStudentModal}
                    className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
                  >
                    Details
                  </button>
                </Link>
              </div>
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-sm font-medium">
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {students?.slice(0, 5).map((student, index) => (
                    <tr key={index} className="text-sm">
                      <td className="border px-4 py-2">
                        {student.studentName}
                      </td>
                      <td className="border px-4 py-2 max-w-xs truncate">
                        {student.GroupId}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Groups Table */}
            <div className="bg-white  rounded-2xl p-4 col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium">Groups</h2>
                <Link href={"/dashboard/admin/add-user"}>
                  <button
                    // onClick={toggleGroupModal}
                    className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
                  >
                    Details
                  </button>
                </Link>
              </div>
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-sm font-medium">
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Teacher</th>
                    <th className="border px-4 py-2">Members</th>
                  </tr>
                </thead>
                <tbody>
                  {groups?.slice(0, 5).map((group, index) => (
                    <tr key={index} className="text-sm">
                      <td className="border px-4 py-2">{group.name}</td>
                      <td className="border px-4 py-2">{group.teacher_id}</td>
                      <td className="border px-4 py-2">
                        {group.parent_id.length}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Payments Table */}
            {/* <div className="bg-white  rounded-2xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium">Payments</h2>
                <button
                  // onClick={toggleStudentModal}
                  className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
                >
                  Details
                </button>
              </div>
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-sm font-medium">
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment, index) => (
                    <tr key={index} className="text-sm">
                      <td className="border px-4 py-2">{payment.name}</td>
                      <td className="border px-4 py-2">{payment.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}
          </div>

          {/* Modal code can go here for adding teachers, students, groups */}
        </div>
      </div>
    </>
  );
}

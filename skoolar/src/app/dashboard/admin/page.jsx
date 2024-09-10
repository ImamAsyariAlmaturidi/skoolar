"use client";

import { useState } from "react";
import SideBarAdmin from "../../../components/SidebarAdmin";
import Link from "next/link";

export default function AdminDashboard() {
  // State for managing teachers, students, groups, and payments
  const [teachers, setTeachers] = useState([
    { name: "Ms Lita", subject: "Math" },
    { name: "Ms Rina", subject: "Science" },
    { name: "Mr Fathan", subject: "History" },
  ]);
  const [students, setStudents] = useState([
    { name: "Alice", grade: "6A" },
    { name: "Bob", grade: "5A" },
    { name: "Charlie", grade: "4C" },
  ]);
  const [groups, setGroups] = useState([
    { name: "6A", teacher: "Ms Lita", members: 12 },
    { name: "5A", teacher: "Ms Rina", members: 12 },
  ]);
  const [payments, setPayments] = useState([
    { name: "Alice", status: "Paid" },
    { name: "Bob", status: "Pending" },
  ]);

  // Modal controls for teacher and student
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);

  // Toggle Modal Handlers
  const toggleTeacherModal = () => setIsTeacherModalOpen(!isTeacherModalOpen);
  const toggleStudentModal = () => setIsStudentModalOpen(!isStudentModalOpen);
  const toggleGroupModal = () => setIsGroupModalOpen(!isGroupModalOpen);

  return (
    <>
      <div className=" w-full overflow-y-auto">
        <div className="flex h-full flex-col w-full rounded-3xl overflow-y-auto">
          <header className="flex justify-between items-center px-6 py-5 pt-4">
            <h1 className="text-2xl font-medium">Admin Dashboard</h1>
          </header>

          <div className="grid grid-cols-2 gap-6 px-6 h-full">
            {/* Teachers Table */}
            <div className="bg-white  rounded-2xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium">Teachers</h2>
                <Link href={"/dashboard/admin/list-user"}>
                  <button
                    onClick={toggleTeacherModal}
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
                    <th className="border px-4 py-2">Subject</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((teacher, index) => (
                    <tr key={index} className="text-sm">
                      <td className="border px-4 py-2">{teacher.name}</td>
                      <td className="border px-4 py-2">{teacher.subject}</td>
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
                    onClick={toggleStudentModal}
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
                  {students.map((student, index) => (
                    <tr key={index} className="text-sm">
                      <td className="border px-4 py-2">{student.name}</td>
                      <td className="border px-4 py-2">{student.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Groups Table */}
            <div className="bg-white  rounded-2xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium">Groups</h2>
                <Link href={"/dashboard/admin/add-user"}>
                  <button
                    onClick={toggleGroupModal}
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
                  {groups.map((group, index) => (
                    <tr key={index} className="text-sm">
                      <td className="border px-4 py-2">{group.name}</td>
                      <td className="border px-4 py-2">{group.teacher}</td>
                      <td className="border px-4 py-2">{group.members}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Payments Table */}
            <div className="bg-white  rounded-2xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium">Payments</h2>
                <button
                  onClick={toggleStudentModal}
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
            </div>
          </div>

          {/* Modal code can go here for adding teachers, students, groups */}
        </div>
      </div>
    </>
  );
}

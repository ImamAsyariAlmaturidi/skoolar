"use client";

import { useEffect, useState } from "react";
import { getAllUser, getParent } from "./action";

export default function TeacherStudentList() {
  // State untuk daftar guru dan murid
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

  // State untuk modal guru dan murid
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);

  // State untuk inputan baru (guru atau murid)
  const [newTeacher, setNewTeacher] = useState({ name: "", subject: "" });
  const [newStudent, setNewStudent] = useState({ name: "", grade: "" });

  // Fungsi untuk membuka modal guru
  const toggleTeacherModal = () => {
    setIsTeacherModalOpen(!isTeacherModalOpen);
    setNewTeacher({ name: "", subject: "" }); // Reset inputan modal guru
  };

  // Fungsi untuk membuka modal murid
  const toggleStudentModal = () => {
    setIsStudentModalOpen(!isStudentModalOpen);
    setNewStudent({ name: "", grade: "" }); // Reset inputan modal murid
  };

  // Fungsi untuk mengubah input modal guru
  const handleTeacherInputChange = (e) => {
    setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
  };

  // Fungsi untuk mengubah input modal murid
  const handleStudentInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };
  //

  // Fungsi untuk menambahkan guru
  const handleAddTeacher = () => {
    setTeachers([
      ...teachers,
      { name: newTeacher.name, subject: newTeacher.subject },
    ]);
    toggleTeacherModal(); // Tutup modal setelah menambahkan
  };

  // Fungsi untuk menambahkan murid
  const handleAddStudent = () => {
    setStudents([
      ...students,
      { name: newStudent.name, grade: newStudent.grade },
    ]);
    toggleStudentModal(); // Tutup modal setelah menambahkan
  };

  return (
    <>
      <div className="flex ml-4  w-full bg-white rounded-2xl">
        <div className="flex flex-1 flex-col  ">
          <header className="sticky top-0 z-30 flex h-14 pt-7 pb-7 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <h1 className="text-lg font-medium">Teachers & Students</h1>
          </header>

          <main className="grid flex-1 items-start gap-4 pt-5 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="grid auto-rows-max items-start">
              <section className="grid items-start gap-4 lg:grid-cols-2">
                {/* List Guru */}
                <div className="rounded-lg border border-gray-300 bg-white p-6 ">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-lg font-medium">Teachers</h3>
                    <button
                      className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                      onClick={toggleTeacherModal}
                    >
                      Add Teacher
                    </button>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    <table className="min-w-full table-auto border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700">
                          <th className="border px-4 py-2">Name</th>
                          <th className="border px-4 py-2">Subject</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teachers.map((teacher, index) => (
                          <tr key={index} className="text-sm text-gray-700">
                            <td className="border px-4 py-2">{teacher.name}</td>
                            <td className="border px-4 py-2">
                              {teacher.subject}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* List Murid */}
                <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-lg font-medium">Students</h3>
                    <button
                      className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                      onClick={toggleStudentModal}
                    >
                      Add Student
                    </button>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    <table className="min-w-full table-auto border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700">
                          <th className="border px-4 py-2">Name</th>
                          <th className="border px-4 py-2">Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((student, index) => (
                          <tr key={index} className="text-sm text-gray-700">
                            <td className="border px-4 py-2">{student.name}</td>
                            <td className="border px-4 py-2">
                              {student.grade}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </div>
          </main>

          {/* Modal untuk Menambahkan Guru */}
          {isTeacherModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                <h2 className="text-lg font-medium mb-4">Add Teacher</h2>

                <div className="mb-4">
                  <label
                    htmlFor="teacherName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Teacher Name
                  </label>
                  <input
                    type="text"
                    id="teacherName"
                    name="name"
                    value={newTeacher.name}
                    onChange={handleTeacherInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="teacherSubject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="teacherSubject"
                    name="subject"
                    value={newTeacher.subject}
                    onChange={handleTeacherInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    className="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400"
                    onClick={toggleTeacherModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                    onClick={handleAddTeacher}
                  >
                    Add Teacher
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Modal untuk Menambahkan Murid */}
          {isStudentModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                <h2 className="text-lg font-medium mb-4">Add Student</h2>

                {/* Input Parent Name */}
                <div className="mb-4">
                  <label
                    htmlFor="parentName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Parent Name
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={newStudent.parentName}
                    onChange={handleStudentInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                  />
                </div>

                {/* Input Student Name */}
                <div className="mb-4">
                  <label
                    htmlFor="studentName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Student Name
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={newStudent.studentName}
                    onChange={handleStudentInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                  />
                </div>

                {/* Input NISN */}
                <div className="mb-4">
                  <label
                    htmlFor="nisn"
                    className="block text-sm font-medium text-gray-700"
                  >
                    NISN
                  </label>
                  <input
                    type="text"
                    id="nisn"
                    name="NISN"
                    value={newStudent.nisn}
                    onChange={handleStudentInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                  />
                </div>

                {/* Group Checkbox */}
                <div className="mb-4">
                  <label
                    htmlFor="group"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Group
                  </label>
                  <div className="mt-2">
                    {["6A", "4C", "3B", "1A"].map((group, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`group-${group}`}
                          name="group"
                          value={group}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor={`group-${group}`}
                          className="ml-2 block text-sm text-gray-700"
                        >
                          {group}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Input Password */}
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    value={newStudent.password}
                    onChange={handleStudentInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    className="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400"
                    onClick={toggleStudentModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                    onClick={handleAddStudent}
                  >
                    Add Student
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

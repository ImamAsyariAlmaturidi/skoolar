"use client";

import { useEffect, useState } from "react";
import { getAllUser, getGroup, getParent } from "../list-user/action";
import { postGroup } from "./action";

export default function Group() {
  const [products, setProducts] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [teacherSearchTerm, setTeacherSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const groupsData = await getGroup();
    setProducts(groupsData);

    const studentsData = await getParent();
    console.log(studentsData);
    setStudents(studentsData);

    const teacherData = await getAllUser();
    setTeachers(teacherData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const filteredStudents = students?.filter((student) =>
    student.studentName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTeachers = teachers?.filter((teacher) =>
    teacher.name.toLowerCase().includes(teacherSearchTerm.toLowerCase())
  );

  const postGroups = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);

    const parentIds = [];
    formData.forEach((value, key) => {
      if (key === "parent_id") {
        parentIds.push(value);
      }
    });

    // Menambahkan parent_id array ke FormData
    formData.set("parent_id", JSON.stringify(parentIds));
    const result = await postGroup(formData);

    if (result.success) {
      await fetchData();
      toggleModal(); // Tutup modal jika berhasil
    } else {
      console.error("Error adding Group:", result.error);
      // Anda bisa menambahkan notifikasi error di sini jika diperlukan
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex  w-full bg-[#F0F6FE]">
        <div className="flex flex-1 flex-col ">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            {/* Header code here */}
          </header>

          <main className="grid flex-1 items-start p-4 py-0 h-full overflow-y-auto">
            <div className="grid auto-rows-max items-start h-full ">
              <section className="grid items-start gap-4 lg:grid-cols-4 h-full">
                <div className="grid grid-cols-1 gap-4 lg:col-span-4 h-full">
                  <div className="rounded-2xl  bg-white p-6 shadow-sm h-full ">
                    <div className="mb-5 flex items-center justify-between">
                      <h3 className="text-xl font-semibold">All Groups</h3>
                      <button
                        className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
                        onClick={toggleModal}
                      >
                        New Group
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {products.map((product, index) => (
                        <div
                          key={index}
                          className="rounded-lg border border-gray-300 bg-white p-3 shadow-sm"
                        >
                          <p className="text-lg font-medium text-gray-700">
                            {product.name}
                          </p>
                          <p className="text-sm text-gray-400">
                            Teacher: {product.teacher_id}
                          </p>
                          <p className="text-sm text-gray-400">
                            Member: {product.parent_id.length}
                          </p>
                          <div className="flex justify-end">
                            <button className="rounded-md border border-blue-600 px-4 mt-2 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
                              Detail
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
                <h2 className="text-lg font-medium mb-4">Create New Group</h2>
                <form onSubmit={postGroups}>
                  {/* Nama Group */}
                  <div className="mb-4">
                    <label
                      htmlFor="groupName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Group Name
                    </label>
                    <input
                      type="text"
                      id="groupName"
                      name="name"
                      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                    />
                  </div>

                  {/* Pilih Teacher */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Teacher
                    </label>
                    <input
                      type="search"
                      placeholder="Search teachers..."
                      value={teacherSearchTerm}
                      onChange={(e) => setTeacherSearchTerm(e.target.value)}
                      className="mb-4 w-full rounded-md border border-gray-300 p-2"
                    />
                    <div className="h-40 overflow-y-auto border border-gray-300 rounded-md p-2">
                      {filteredTeachers?.map((teacher, index) => (
                        <div key={index} className="flex items-center mb-2">
                          <input
                            type="radio"
                            id={`teacher-${index}`}
                            name="teacher_id"
                            value={teacher._id}
                            className="h-4 w-4 text-blue-600"
                          />
                          <label
                            htmlFor={`teacher-${index}`}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {teacher.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pilih Murid dengan Searchbox */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Students
                    </label>

                    {/* searchStudent */}
                    <input
                      type="search"
                      placeholder="Search students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="mb-4 w-full rounded-md border border-gray-300 p-2"
                    />
                    {/* student */}

                    <div className="h-40 overflow-y-auto border border-gray-300 rounded-md p-2">
                      {filteredStudents.map((student, index) => (
                        <div key={index} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            name="parent_id"
                            id={`student-${index}`}
                            value={student._id}
                            className="h-4 w-4 text-blue-600"
                          />
                          <label
                            htmlFor={`student-${index}`}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {student.studentName || "Unnamed Student"}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end gap-2">
                    <button
                      className="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400"
                      onClick={toggleModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                    >
                      {isLoading ? "Adding..." : "Create Group"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

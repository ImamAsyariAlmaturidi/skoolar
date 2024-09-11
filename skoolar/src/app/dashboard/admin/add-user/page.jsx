"use client";

import { useEffect, useState } from "react";
import { getAllUser, getGroup, getParent } from "../list-user/action";
import { getGroupWithName, postGroup } from "./action";

export default function Group() {
  const [products, setProducts] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setDetailIsModalOpen] = useState(false);
  const [selectedParent, setSelectedParent] = useState(null);
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

  const toggleDetailModal = (data) => {
    setSelectedParent(data);
    setDetailIsModalOpen(!isDetailModalOpen);
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

    formData.set("parent_id", JSON.stringify(parentIds));
    const result = await postGroup(formData);

    if (result.success) {
      await fetchData();
      toggleModal();
    } else {
      console.error("Error adding Group:", result.error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex w-full bg-[#F0F6FE]">
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            {/* Header code here */}
          </header>

          <main className="grid flex-1 items-start p-4 py-0 h-full overflow-y-auto">
            <div className="grid auto-rows-max items-start h-full ">
              <section className="grid items-start gap-4 lg:grid-cols-4 h-full">
                <div className="grid grid-cols-1 gap-4 lg:col-span-4 h-full">
                  <div className="rounded-2xl bg-white p-6 shadow-sm h-full">
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
                            Teacher: {product?.teacher[0]?.name}
                          </p>
                          <p className="text-sm text-gray-400">
                            Member: {product.parent_id.length}
                          </p>
                          <div className="flex justify-end">
                            <button
                              onClick={() => toggleDetailModal(product)}
                              className="rounded-md border border-blue-600 px-4 mt-2 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
                            >
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

          {/* Modal untuk Membuat Group */}
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
                      className="mt-1 block w-full bg-white rounded-md border border-gray-300 shadow-sm p-2"
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
                            className="h-4 w-4 text-blue-600 bg-white"
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
                    <input
                      type="search"
                      placeholder="Search students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="mb-4 w-full rounded-md border bg-white border-gray-300 p-2"
                    />
                    <div className="h-40 overflow-y-auto border border-gray-300 rounded-md p-2">
                      {filteredStudents.map((student, index) => (
                        <div key={index} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            name="parent_id"
                            id={`student-${index}`}
                            value={student._id}
                            className="h-4 w-4 text-blue-600 bg-white"
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

          {/* Modal Detail */}
          {isDetailModalOpen && selectedParent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
              <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
                <div className="border-b border-gray-200 p-4">
                  <h2 className="text-xl font-bold">Detail Grup</h2>
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500 mb-1">Nama Grup</p>
                    <p className="text-lg font-medium text-gray-800">{selectedParent.name}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500 mb-1">Teacher</p>
                    <p className="text-md text-gray-700">{selectedParent.teacher?.[0]?.name || "No Teacher Assigned"}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500 mb-1">Daftar Siswa</p>
                    <ul className="list-disc list-inside text-md text-gray-700">
                      {selectedParent.parents.map((student, index) => (
                        <li key={index} className="mb-1">
                          {student.studentName || "Unnamed Student"}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-200 p-4 text-right">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setDetailIsModalOpen(false)}
                  >
                    Tutup
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

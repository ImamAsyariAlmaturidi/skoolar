"use client";

import { useState } from "react";

export default function Group() {
  const [products, setProducts] = useState([
    { name: "6A", teacher: "Ms Lita", member: "12" },
    { name: "5A", teacher: "Ms Rina", member: "12" },
    { name: "4C", teacher: "Mr Fathan", member: "12" },
    { name: "6A", teacher: "Ms Lita", member: "12" },
    { name: "5A", teacher: "Ms Rina", member: "12" },
    { name: "4C", teacher: "Mr Fathan", member: "12" },
    { name: "6A", teacher: "Ms Lita", member: "12" },
    { name: "5A", teacher: "Ms Rina", member: "12" },
    { name: "4C", teacher: "Mr Fathan", member: "12" },
    { name: "6A", teacher: "Ms Lita", member: "12" },
    { name: "5A", teacher: "Ms Rina", member: "12" },
    { name: "4C", teacher: "Mr Fathan", member: "12" },
  ]);

  const teachers = ["Ms Lita", "Ms Rina", "Mr Fathan"];
  const students = ["Alice", "Bob", "Charlie", "David"];

  const [newGroup, setNewGroup] = useState({
    groupName: "",
    teacher: "",
    students: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGroup({ ...newGroup, [name]: value });
  };

  const handleStudentChange = (e) => {
    const { value, checked } = e.target;
    setNewGroup((prev) => ({
      ...prev,
      students: checked
        ? [...prev.students, value]
        : prev.students.filter((student) => student !== value),
    }));
  };

  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex w-full h-full bg-[#F0F6FE] overflow-y-auto overflow-x-hidden">
        <div className="flex flex-1 flex-col ">
          <main className="grid flex-1 items-start p-4 py-0 h-screen">
            <div className="grid auto-rows-max items-start h-full">
              <section className="grid items-start gap-4 lg:grid-cols-4 h-full">
                <div className="grid grid-cols-1 gap-4 lg:col-span-4 h-full">
                  <div className="rounded-2xl bg-white p-6 shadow-sm h-auto overflow-y-auto overflow-x-hidden">
                    <div className="mb-5 flex items-center justify-between">
                      <h3 className="text-lg font-medium">All Groups</h3>
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
                            Teacher: {product.teacher}
                          </p>
                          <p className="text-sm text-gray-400">
                            Member: {product.member}
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
                    name="groupName"
                    value={newGroup.groupName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                  />
                </div>

                {/* Pilih Teacher */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Teacher
                  </label>
                  {teachers.map((teacher, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="radio"
                        id={`teacher-${index}`}
                        name="teacher"
                        value={teacher}
                        checked={newGroup.teacher === teacher}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <label
                        htmlFor={`teacher-${index}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {teacher}
                      </label>
                    </div>
                  ))}
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
                    className="mb-4 w-full rounded-md border border-gray-300 p-2"
                  />
                  <div className="h-40 overflow-y-auto border border-gray-300 rounded-md p-2">
                    {filteredStudents.map((student, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id={`student-${index}`}
                          value={student}
                          checked={newGroup.students.includes(student)}
                          onChange={handleStudentChange}
                          className="h-4 w-4 text-blue-600"
                        />
                        <label
                          htmlFor={`student-${index}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {student}
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
                    className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                    onClick={() => {
                      setProducts([...products, newGroup]);
                      toggleModal();
                    }}
                  >
                    Create Group
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

"use client";

import { useState } from "react";

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

    // State untuk modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newEntry, setNewEntry] = useState({ type: "", name: "", subjectOrGrade: "" });

    // Fungsi untuk membuka modal
    const toggleModal = (type) => {
        setNewEntry({ type, name: "", subjectOrGrade: "" });
        setIsModalOpen(!isModalOpen);
    };

    // Fungsi untuk mengubah input modal
    const handleInputChange = (e) => {
        setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
    };

    // Fungsi untuk menambahkan guru atau murid
    const handleAddEntry = () => {
        if (newEntry.type === "teacher") {
            setTeachers([...teachers, { name: newEntry.name, subject: newEntry.subjectOrGrade }]);
        } else if (newEntry.type === "student") {
            setStudents([...students, { name: newEntry.name, grade: newEntry.subjectOrGrade }]);
        }
        toggleModal(""); // Tutup modal setelah menambahkan
    };

    return (
        <>
            <div className="flex min-h-screen w-full bg-white">
                <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-white sm:flex">
                    {/* Sidebar */}
                </aside>
                <div className="flex flex-1 flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                        {/* Header */}
                        <h1 className="text-lg font-medium">Teachers & Students</h1>
                    </header>

                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        <div className="grid auto-rows-max items-start">
                            <section className="grid items-start gap-4 lg:grid-cols-2">
                                {/* List Guru */}
                                <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
                                    <div className="mb-5 flex items-center justify-between">
                                        <h3 className="text-lg font-medium">Teachers</h3>
                                        <button
                                            className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                                            onClick={() => toggleModal("teacher")}
                                        >
                                            Add Teacher
                                        </button>
                                    </div>
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
                                                    <td className="border px-4 py-2">{teacher.subject}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* List Murid */}
                                <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
                                    <div className="mb-5 flex items-center justify-between">
                                        <h3 className="text-lg font-medium">Students</h3>
                                        <button
                                            className="rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600"
                                            onClick={() => toggleModal("student")}
                                        >
                                            Add Student
                                        </button>
                                    </div>
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
                                                    <td className="border px-4 py-2">{student.grade}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>
                    </main>

                    {/* Modal untuk Menambahkan Guru atau Murid */}
                    {isModalOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                                <h2 className="text-lg font-medium mb-4">Add {newEntry.type === "teacher" ? "Teacher" : "Student"}</h2>

                                <div className="mb-4">
                                    <label htmlFor="entryName" className="block text-sm font-medium text-gray-700">
                                        {newEntry.type === "teacher" ? "Teacher Name" : "Student Name"}
                                    </label>
                                    <input
                                        type="text"
                                        id="entryName"
                                        name="name"
                                        value={newEntry.name}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="subjectOrGrade" className="block text-sm font-medium text-gray-700">
                                        {newEntry.type === "teacher" ? "Subject" : "Grade"}
                                    </label>
                                    <input
                                        type="text"
                                        id="subjectOrGrade"
                                        name="subjectOrGrade"
                                        value={newEntry.subjectOrGrade}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                                    />
                                </div>

                                <div className="flex justify-end gap-2">
                                    <button
                                        className="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400"
                                        onClick={toggleModal}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className={`rounded-md ${newEntry.type === "teacher" ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"
                                            } px-4 py-2 text-sm font-medium text-white`}
                                        onClick={handleAddEntry}
                                    >
                                        Add {newEntry.type === "teacher" ? "Teacher" : "Student"}
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

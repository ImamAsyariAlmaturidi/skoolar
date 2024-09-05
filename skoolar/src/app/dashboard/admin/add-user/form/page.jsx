"use client"

import React, { useState } from 'react';

const FormPage = () => {
    const [groupName, setGroupName] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState('');
    const [selectedMembers, setSelectedMembers] = useState([]);

    const teachers = ['Mr. John', 'Ms. Sarah', 'Mrs. Alice'];

    const students = ['Alice', 'Bob', 'Charlie', 'David', 'Emma'];

    const handleGroupNameChange = (e) => {
        setGroupName(e.target.value);
    };

    const handleTeacherChange = (e) => {
        setSelectedTeacher(e.target.value);
    };

    const handleMemberChange = (e) => {
        const member = e.target.value;
        if (e.target.checked) {
            setSelectedMembers([...selectedMembers, member]);
        } else {
            setSelectedMembers(selectedMembers.filter((m) => m !== member));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            groupName,
            selectedTeacher,
            selectedMembers,
        };
        console.log('Form Data:', formData);

    };

    return (
        <div className="max-w-lg mx-auto p-4 mt-20">
            <h2 className="text-2xl font-bold mb-4">Create Group</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Input untuk nama group */}
                <div>
                    <label className="block text-gray-700">Group Name:</label>
                    <input
                        type="text"
                        value={groupName}
                        onChange={handleGroupNameChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter group name"
                    />
                </div>

                {/* Radio button untuk memilih teacher */}
                <div>
                    <label className="block text-gray-700">Teacher:</label>
                    {teachers.map((teacher, index) => (
                        <div key={index} className="flex items-center">
                            <input
                                type="radio"
                                id={teacher}
                                value={teacher}
                                name="teacher"
                                checked={selectedTeacher === teacher}
                                onChange={handleTeacherChange}
                                className="mr-2"
                            />
                            <label htmlFor={teacher} className="text-gray-700">
                                {teacher}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Checkbox untuk memilih members */}
                <div>
                    <label className="block text-gray-700">Members:</label>
                    {students.map((student, index) => (
                        <div key={index} className="flex items-center">
                            <input
                                type="checkbox"
                                id={student}
                                value={student}
                                checked={selectedMembers.includes(student)}
                                onChange={handleMemberChange}
                                className="mr-2"
                            />
                            <label htmlFor={student} className="text-gray-700">
                                {student}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Tombol submit */}
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Create Group
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormPage;

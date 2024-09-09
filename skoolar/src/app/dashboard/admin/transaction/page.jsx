"use client";
import React, { useState } from "react";
import AddTransactionForm from "./addTransactionForm/page";

const TuitionPaymentStatusPage = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", nisn: "123456789", group: "6A", hasPaid: true },
    {
      id: 2,
      name: "Jane Smith",
      nisn: "987654321",
      group: "4C",
      hasPaid: false,
    },
    {
      id: 3,
      name: "Alice Johnson",
      nisn: "456789123",
      group: "3B",
      hasPaid: false,
    },
    { id: 4, name: "Bob Brown", nisn: "654321987", group: "1A", hasPaid: true },
  ]);

  // Function to handle sending reminder
  const sendReminder = (student) => {
    alert(`Reminder sent to ${student.name}`);
  };

  // Function to handle adding a new transaction
  const handleAddTransaction = (transaction) => {
    alert(
      `Transaction added: Amount: ${transaction.amount}, Description: ${transaction.description}`
    );
    // Here you can add logic to handle the transaction data, e.g., updating state or sending it to an API
  };

  return (
    <div className="bg-white rounded-2xl p-4 w-full ml-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-lg">Tuition Payment Status</h2>
      </div>

      <AddTransactionForm onAddTransaction={handleAddTransaction} />

      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-sm font-medium">
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">NISN</th>
            <th className="border px-4 py-2">Group</th>
            <th className="border px-4 py-2">Payment Status</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className="text-sm">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.nisn}</td>
              <td className="border px-4 py-2">{student.group}</td>
              <td className="border px-4 py-2">
                {student.hasPaid ? (
                  <span className="text-green-500">Paid</span>
                ) : (
                  <span className="text-red-500">Unpaid</span>
                )}
              </td>
              <td className="border px-4 py-2">
                {!student.hasPaid && (
                  <button
                    className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
                    onClick={() => sendReminder(student)}
                  >
                    Send Reminder
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TuitionPaymentStatusPage;

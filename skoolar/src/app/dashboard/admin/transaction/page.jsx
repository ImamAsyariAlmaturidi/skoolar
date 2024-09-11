"use client";
import React, { useEffect, useState } from "react";
import { getParent } from "../list-user/action";
import { getTranscation, postNewTransaction } from "./action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { func } from "joi";

const TuitionPaymentStatusPage = () => {
  const [students, setStudents] = useState([]);

  const [parents, setParents] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const studentsData = await getParent();
    setParents(studentsData);

    const transactionData = await getTranscation();
    console.log(transactionData);
    setStudents(transactionData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function toggleModal() {
    setIsModalOpen(false);
  }

  const postTransaction = async (event) => {
    event.preventDefault();
    // setIsLoading(true);
    const formData = new FormData(event.target);
    const result = await postNewTransaction(formData);

    if (result.success) {
      await fetchData();
      toggleModal();
      toast("Succes Add New Transaction", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      console.error("Error adding Student:", result.error);
      // Anda bisa menambahkan notifikasi error di sini jika diperlukan
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl p-4 w-full ml-4 overflow-y-auto overflow-x-auto">
      <ToastContainer />
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-2xl text-neutral-800">
          Tuition Payment Status
        </h2>
      </div>

      <div className="w-full flex my-5">
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
        >
          New Transaction
        </button>
      </div>

      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-sm font-medium">
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className="text-sm">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">
                {student?.parents[0]?.studentName || "Invalid ID"}
              </td>
              <td className="border px-4 py-2">{student.amount}</td>
              <td className="border px-4 py-2">{student.description}</td>
              <td className="border px-4 py-2">{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 ">
                Add New Transaction
              </h3>
              <form onSubmit={postTransaction} className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium mb-1"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="description"
                    required
                    className="w-full px-3 py-2 border-[0.1px] border-neutral-600 border-input bg-white rounded-md "
                  />
                </div>
                <div className="">
                  <label htmlFor="text" className=" text-sm font-medium mb-1">
                    Amount
                  </label>
                  <input
                    id="amount"
                    name="amount"
                    required
                    className="w-full px-3 py-2 border-[0.1px] border-neutral-500 border-input bg-white rounded-md "
                    rows={3}
                  />
                </div>
                <div className="">
                  <label htmlFor="text" className=" text-sm font-medium ">
                    Due Date
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    required
                    className="w-full px-3 py-2 border-[0.1px] border-neutral-500 border-input bg-white rounded-md "
                    rows={3}
                  />
                </div>

                <p>Student</p>
                <div className="h-40 overflow-y-auto border border-gray-300 rounded-md p-3">
                  {parents.map((student, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="radio"
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

                <div className="flex justify-end space-x-2 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-input rounded-md text-sm font-medium "
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-700 text-white rounded-md text-sm font-medium hover:bg-primary/90"
                  >
                    {isLoading ? "Creating..." : "Add New Transaction"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TuitionPaymentStatusPage;

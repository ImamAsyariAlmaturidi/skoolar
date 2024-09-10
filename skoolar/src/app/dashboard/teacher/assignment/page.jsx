"use client";
import { useState } from "react";
import SideBar from "../../../../components/teacher/Sidebar";
import addCourseWork from "./action";

export default function TeacherAssignment() {
  const [tugas, setTugas] = useState(false);

  // State variables for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  async function add(event) {
    event.preventDefault();

    const formData = {
      title,
      description,
      course,
      deadline: `${date}T${time}`,
    };

    try {
      await addCourseWork(formData);
      // Clear form fields after successful submission
      setTitle("");
      setDescription("");
      setCourse("");
      setDate("");
      setTime("");
      setTugas(false); // Close the form modal
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="w-full h-screen bg-[#f0f6fe] flex gap-3 px-5 py-10">
        <SideBar className="w-1/4 lg:w-1/5" />
        <div className="w-[90%] bg-white rounded-3xl px-10 py-5 overflow-y-auto">
          <section className="text-black font-semibold h-[20rem] relative pt-2 border-b-2">
            <span className="text-3xl text-neutral-700">
              Class 6A Assignments
            </span>
            <div className="flex w-[90%] justify-evenly items-center h-16 px-4 mt-11 ">
              <div className="w-[10rem] flex justify-evenly items-center h-full border-2 border-[#0f828c] border-l-8 text-black relative rounded-2xl">
                <img
                  className="w-9 h-9"
                  src="https://www.svgrepo.com/show/473366/school.svg"
                  alt="Class"
                />
                <div className="ml-3 flex flex-col justify-center">
                  <div className="text-right text-neutral-500">Class</div>
                  <p className="text-right">6A</p>
                </div>
              </div>
              <div className="w-[10rem] flex justify-evenly items-center h-full border-2 border-[#f5a81c] border-l-8 text-black relative rounded-2xl">
                <img
                  className="w-8 h-8"
                  src="https://www.svgrepo.com/show/509193/people.svg"
                  alt="Students"
                />
                <div className="ml-3 flex flex-col justify-center">
                  <div className="text-right text-neutral-500">Students</div>
                  <p className="text-right">22</p>
                </div>
              </div>
            </div>
            <div className="flex px-4 h-8 mt-14 items-end gap-2">
              <img
                className="w-8 h-8"
                src="https://www.svgrepo.com/show/522120/flag.svg"
                alt="Challenges"
              />
              <span className="text-2xl">Challenges</span>
            </div>
            <div className="flex w-full px-4 justify-between items-end mt-4 absolute bottom-2">
              <button
                onClick={() => setTugas(true)}
                className="px-4 py-3 border-2 border-[#66b2b1] text-[#66b2b1] text-[14px] rounded-2xl"
              >
                Add New Challenge
              </button>
            </div>
          </section>
          <div className="relative mt-4 max-h-[400px] overflow-y-auto">
            <div className="overflow-x-auto">
              <table className="w-full min-w-full rounded-2xl overflow-x-hidden overflow-y-auto border-b-2">
                <thead className="text-neutral-600 bg-neutral-100 top-0 z-10 border-slate-400 border-b-2">
                  <tr className="h-[4rem]">
                    <th className="px-4 py-2 text-left w-[5%]">No</th>
                    <th className="px-4 py-2 text-left w-[50%]">Challenges</th>
                    <th className="px-4 py-2 text-left w-[15%]">Subject</th>
                    <th className="px-4 py-2 text-left w-[15%]">Deadline</th>
                    <th className="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="text-black text-[15px]">
                  {[...Array(8)].map((_, index) => (
                    <tr
                      key={index}
                      className="h-[3rem] border-neutral-300 border-b-2"
                    >
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">Algebra , sin , cos tan</td>
                      <td className="px-4 py-2">Mathematics</td>
                      <td className="px-4 py-2">15-03-2024</td>
                      <td className="px-4 py-2">
                        <button className="px-6 py-2 border-2 rounded-md border-[#66b2b1] text-[#66b2b1]">
                          Ongoing
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {tugas && (
        <div className="fixed inset-0 h-screen w-full bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[30rem] h-[40rem] rounded-2xl gap-10 bg-white">
            <section className="px-5 h-[11%] w-full flex justify-between items-center">
              <span className="text-2xl text-neutral-600">
                Add New Assignment
              </span>
              <span
                onClick={() => setTugas(false)}
                className="text-2xl text-neutral-600 cursor-pointer hover:text-red-700"
              >
                x
              </span>
            </section>
            <div className="h-[80%] w-full py-3 px-5">
              <form
                onSubmit={add}
                className="h-full w-full flex flex-col space-y-6"
              >
                <div>
                  <label className="text-neutral-600">Title</label>
                  <input
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full py-2 px-4 text-black outline-none border-neutral-400 bg-neutral-100"
                    required
                  />
                </div>
                <div>
                  <label className="text-neutral-600">Description</label>
                  <input
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full py-2 px-4 text-black outline-none border-neutral-400 bg-neutral-100"
                    required
                  />
                </div>
                <div>
                  <label className="text-neutral-600">Course Name</label>
                  <select
                    name="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full py-5 px-4 text-black outline-none border-neutral-400 bg-neutral-100"
                    required
                  >
                    <option value="" disabled>
                      Select a course
                    </option>
                    <option value="Science">Science</option>
                    <option value="English">English</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Art & Craft">Art & Craft</option>
                    <option value="Mandarin">Mandarin</option>
                  </select>
                </div>
                <div>
                  <label className="text-neutral-600">Deadline: Date</label>
                  <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full py-3 px-4 text-neutral-700 outline-none border-neutral-400 bg-neutral-100 mt-1"
                    required
                  />
                </div>
                <div>
                  <label className="text-neutral-600">Deadline: Time</label>
                  <input
                    type="time"
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full py-3 px-4 text-neutral-700 outline-none border-neutral-400 bg-neutral-100 mt-1"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#006bf8] my-2 rounded-lg text-white"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

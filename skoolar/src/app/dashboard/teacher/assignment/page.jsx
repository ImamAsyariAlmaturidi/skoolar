"use client";

import { useState } from "react";
import SideBar from "../../../../components/teacher/Sidebar";

export default function TeacherAssignment() {
  const [tugas, setTugas] = useState(false);
  return (
    <>
      <div className="w-full h-screen bg-[#f0ecea] flex gap-3 px-5 py-10">
        <SideBar className="w-1/4 lg:w-1/5" />
        <div className="w-[90%] bg-white rounded-3xl px-10 py-5">
          <section className="text-black font-semibold h-[20rem] relative pt-2  border-b-2">
            <span className="text-3xl">Class 6A Assignments</span>
            <div className="flex w-[90%] justify-evenly items-center h-16 px-4 mt-11">
              <div className="w-[10rem]  flex justify-evenly items-center h-full border-2 border-[#0f828c] border-l-8 text-black rounded-sm relative">
                <img
                  className="w-9 h-9"
                  src="https://www.svgrepo.com/show/473366/school.svg"
                />
                <div className="ml-3 flex flex-col justify-center">
                  <div className="text-right text-neutral-500">Class</div>
                  <p className="text-right">6A</p>
                </div>
              </div>
              <div className="w-[10rem]  flex justify-evenly items-center h-full border-2 border-[#1581bf] border-l-8 text-black rounded-sm relative">
                <img
                  className="w-10 h-10"
                  src="https://www.svgrepo.com/show/341538/strategy-success-task.svg"
                />
                <div className="ml-3 flex flex-col justify-center">
                  <div className="text-right text-neutral-500">Ongoing</div>
                  <p className="text-right">6</p>
                </div>
              </div>
              <div className="w-[10rem]  flex justify-evenly items-center h-full border-2 border-[#893e46] border-l-8 text-black rounded-sm relative">
                <img
                  className="w-9 h-9"
                  src="https://www.svgrepo.com/show/341118/task.svg"
                />
                <div className="ml-3 flex flex-col justify-center">
                  <div className="text-right text-neutral-500 ">Completed</div>
                  <p className="text-right">10</p>
                </div>
              </div>
              <div className="w-[10rem]  flex justify-evenly items-center h-full border-2 border-[#f5a81c] border-l-8 text-black rounded-sm relative">
                <img
                  className="w-8 h-8"
                  src="https://www.svgrepo.com/show/509193/people.svg"
                />
                <div className="ml-3 flex flex-col justify-center">
                  <div className="text-right text-neutral-500">Students</div>
                  <p className="text-right">22</p>
                </div>
              </div>
            </div>
            <div className="flex px-4 h-8  mt-14 items-end gap-2">
              <img
                className="w-8 h-8"
                src="https://www.svgrepo.com/show/522120/flag.svg"
              />
              <span className="text-2xl">Challenges</span>
            </div>
            <div className="flex w-full px-4 justify-between items-end  mt-4 absolute bottom-2">
              <div className="flex gap-10">
                <span>Ongoing</span>
                <span>Completed</span>
              </div>
              <button
                onClick={() => setTugas(true)}
                className="px-4 py-3 border-2 border-[#66b2b1] text-[#66b2b1] text-[14px] rounded-md"
              >
                Add New Challenge
              </button>
            </div>
          </section>
          <div className="relative mt-4">
            <div className="overflow-x-auto">
              <div className="overflow-y-auto max-h-[400px] border-slate-400 border-b-2">
                <table className="w-full min-w-[640px] border-2 rounded-2xl">
                  <thead className="text-neutral-600 bg-neutral-100  top-0 z-10 border-slate-400 border-b-2">
                    <tr className="h-[4rem]">
                      <th className="px-4 py-2 text-left w-[5%]">No</th>
                      <th className="px-4 py-2 text-left w-[50%]">
                        Challenges
                      </th>
                      <th className="px-4 py-2 text-left w-[15%]">Subject</th>
                      <th className="px-4 py-2 text-left w-[15%]">Deadline</th>
                      <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-black text-[15px]">
                    <tr className="h-[3rem] border-neutral-300 border-b-2">
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">Algebra , sin , cos tan</td>
                      <td className="px-4 py-2">Mathematics</td>
                      <td className="px-4 py-2">15-03-2024</td>
                      <td className="px-4 py-2">
                        <button className="px-6 py-2 border-2 rounded-md border-[#66b2b1] text-[#66b2b1]">
                          Ongoing
                        </button>
                      </td>
                    </tr>
                    <tr className="h-[3rem] border-neutral-300 border-b-2">
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">Algebra , sin , cos tan</td>
                      <td className="px-4 py-2">Mathematics</td>
                      <td className="px-4 py-2">15-03-2024</td>
                      <td className="px-4 py-2">
                        <button className="px-6 py-2 border-2 rounded-md border-[#66b2b1] text-[#66b2b1]">
                          Ongoing
                        </button>
                      </td>
                    </tr>
                    <tr className="h-[3rem] border-neutral-300 border-b-2">
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">Algebra , sin , cos tan</td>
                      <td className="px-4 py-2">Mathematics</td>
                      <td className="px-4 py-2">15-03-2024</td>
                      <td className="px-4 py-2">
                        <button className="px-6 py-2 border-2 rounded-md border-[#66b2b1] text-[#66b2b1]">
                          Ongoing
                        </button>
                      </td>
                    </tr>
                    <tr className="h-[3rem] border-neutral-300 border-b-2">
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">Algebra , sin , cos tan</td>
                      <td className="px-4 py-2">Mathematics</td>
                      <td className="px-4 py-2">15-03-2024</td>
                      <td className="px-4 py-2">
                        <button className="px-6 py-2 border-2 rounded-md border-[#66b2b1] text-[#66b2b1]">
                          Ongoing
                        </button>
                      </td>
                    </tr>
                    <tr className="h-[3rem] border-neutral-300 border-b-2">
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">Algebra , sin , cos tan</td>
                      <td className="px-4 py-2">Mathematics</td>
                      <td className="px-4 py-2">15-03-2024</td>
                      <td className="px-4 py-2">
                        <button className="px-6 py-2 border-2 rounded-md border-[#66b2b1] text-[#66b2b1]">
                          Ongoing
                        </button>
                      </td>
                    </tr>
                    <tr className="h-[3rem] border-neutral-300 border-b-2">
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">Algebra , sin , cos tan</td>
                      <td className="px-4 py-2">Mathematics</td>
                      <td className="px-4 py-2">15-03-2024</td>
                      <td className="px-4 py-2">
                        <button className="px-6 py-2 border-2 rounded-md border-[#66b2b1] text-[#66b2b1]">
                          Ongoing
                        </button>
                      </td>
                    </tr>
                    <tr className="h-[3rem] border-neutral-300 border-b-2">
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">Algebra , sin , cos tan</td>
                      <td className="px-4 py-2">Mathematics</td>
                      <td className="px-4 py-2">15-03-2024</td>
                      <td className="px-4 py-2">
                        <button className="px-6 py-2 border-2 rounded-md border-[#66b2b1] text-[#66b2b1]">
                          Ongoing
                        </button>
                      </td>
                    </tr>
                    <tr className="h-[3rem] border-neutral-300 border-b-2">
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">Algebra , sin , cos tan</td>
                      <td className="px-4 py-2">Mathematics</td>
                      <td className="px-4 py-2">15-03-2024</td>
                      <td className="px-4 py-2">
                        <button className="px-6 py-2 border-2 rounded-md border-[#66b2b1] text-[#66b2b1]">
                          Ongoing
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {tugas && (
        <div className="fixed inset-0 h-screen w-full bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
          <div className="flex w-[50rem] h-[20rem] rounded-2xl justify-center items-center gap-10 bg-white">
            <div className="w-[10rem] h-[10rem] flex flex-col gap-3 items-center ">
              <img
                className="h-full w-full border-[0.5px] border-neutral-300 p-4 rounded-2xl"
                src="/Artist-amico.png"
              />
              <span className="text-black">Science</span>
            </div>
            <div className="w-[10rem] h-[10rem] flex flex-col gap-3 items-center ">
              <img
                className="w-[10rem] h-[10rem] border-[0.5px] border-neutral-300 p-4 rounded-2xl"
                src="/English teacher-amico.png"
              />
              <span className="text-black">English</span>
            </div>
            <img
              className="w-[10rem] h-[10rem] border-[0.5px] border-neutral-300 p-4 rounded-2xl"
              src="/Artist-amico.png"
            />
            <img
              className="w-[10rem] h-[10rem] border-[0.5px] border-neutral-300 p-4 rounded-2xl"
              src="/Artist-amico.png"
            />
          </div>
        </div>
      )}
    </>
  );
}

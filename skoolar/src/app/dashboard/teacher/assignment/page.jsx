"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getMe } from "../../parent/action";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { format } from "date-fns";
import { getGroupByID } from "./action";
import TeacherSideBar from "../../../../components/teacher/Sidebar";

// Function to format date and time using date-fns
const formatDate = (dueDate, dueTime) => {
  const { year, month, day } = dueDate;
  const { hours, minutes } = dueTime;

  // Create a date object using the provided values
  const date = new Date(year, month - 1, day, hours, minutes);

  // Format the date using date-fns
  const formattedDate = format(date, "dd/MM/yyyy");
  const formattedTime = format(date, "HH:mm");

  return `${formattedDate} ${formattedTime}`;
};

export default function TeacherAssignment() {
  const [dataGroup, setDataGroup] = useState(null);
  const [groupId, setGroupId] = useState(null);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMe();
        setGroupId(data.GroupId);

        if (data.GroupId) {
          const { data: groupData } = await getGroupByID(data.GroupId);
          setDataGroup(groupData);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!groupId) return;

    const assignmentsRef = collection(db, "assignment");
    const q = query(assignmentsRef, where("groupId", "==", groupId));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedAssignments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAssignments(fetchedAssignments);
      console.log("Fetched Assignments:", fetchedAssignments);
    });

    return () => unsubscribe();
  }, [groupId]);

  return (
    <>
      <div className="w-full h-screen bg-[#f0f6fe] flex gap-3 px-5 py-10">
        <TeacherSideBar className="w-1/4 lg:w-1/5" />
        <div className="w-[90%] bg-white rounded-3xl px-10 py-5 overflow-y-auto">
          <section className="text-black font-semibold h-[20rem] relative pt-2 border-b-2">
            <span className="text-3xl text-neutral-700">
              Class {dataGroup?.name} Assignments
            </span>
            <div className="flex w-[90%] justify-evenly items-center h-16 px-4 mt-11">
              <div className="w-[10rem] flex justify-evenly items-center h-full border-2 border-[#0f828c] border-l-8 text-black relative rounded-2xl">
                <img
                  className="w-9 h-9"
                  src="https://www.svgrepo.com/show/473366/school.svg"
                  alt="Class"
                />
                <div className="ml-3 flex flex-col justify-center">
                  <div className="text-right text-neutral-500">Class</div>
                  <p className="text-right">{dataGroup?.name}</p>
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
                  <p className="text-right">
                    {dataGroup?.parent_id?.length || 0}
                  </p>
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
              <Link
                href={"/dashboard/teacher/assignment/add-assignment"}
                className="px-4 py-3 border-2 border-[#66b2b1] text-[#66b2b1] text-[14px] rounded-2xl"
              >
                Add New Challenge
              </Link>
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
                  </tr>
                </thead>
                <tbody className="text-black text-[15px]">
                  {assignments.map((el, index) => (
                    <tr
                      key={el.id}
                      className="h-[3rem] border-neutral-300 border-b-2"
                    >
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{el.title}</td>
                      <td className="px-4 py-2">{el.courseName}</td>
                      <td className="px-4 py-2">
                        {formatDate(el.dueDate, el.dueTime)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

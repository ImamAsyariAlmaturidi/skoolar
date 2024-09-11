"use client";
import { useEffect, useState } from "react";
import SideBar from "../../../../components/parent/Sidebar";
import { db } from "../../../../config/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { getMe } from "../action";

export default function AssignmentPage() {
  const [groupId, setGroupId] = useState([]);
  const [assignments, setAssignments] = useState([]);
  console.log(assignments);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMe();
        setGroupId(data.GroupId);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (groupId.length === 0) return;

    const assignmentsRef = collection(db, "assignment");
    console.log(groupId);
    const q = query(assignmentsRef, where("groupId", "in", groupId));

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
      <div className="flex gap-3 px-5 py-10 h-screen bg-[#f0f6fe]">
        <SideBar className="w-1/4 lg:w-1/5" />
        <div className="w-[90%] bg-white rounded-3xl px-10 py-5 overflow-x-hidden overflow-y-auto">
          <section className="text-black font-semibold bg-white h-[5rem] pt-2">
            <span className="text-3xl">All Assignments</span>
          </section>
          <div className="w-full h-[40rem] py-3 ">
            <div
              className="w-full h-full py-3 overflow-auto bg-white rounded-2xl"
              id="scroll-container"
            >
              <div className="grid grid-cols-2 gap-4 h-full w-full">
                {assignments.length === 0 ? (
                  <p className="text-center py-10">No assignments available.</p>
                ) : (
                  assignments.map((assignment) => (
                    <section
                      key={assignment.id}
                      className="flex flex-col justify-between border-[1px] rounded-lg border-slate-300 p-4  text-white"
                    >
                      <div className="flex items-start border-b-[0.1px] border-neutral-400">
                        <p className="text-lg mb-2 text-black">
                          Title : {assignment.courseName}
                        </p>
                      </div>
                      <div className="flex items-start justify-between pr-5 text-black border-b-[0.1px] border-neutral-400">
                        <p className=" text-lg mb-2 text-black">
                          Subject : {assignment.courseName}
                        </p>
                        <p>
                          Deadline: {assignment.dueDate.day},
                          {assignment.dueDate.year},{assignment.dueTime.hours}:
                          {assignment.dueTime.minutes}
                        </p>
                      </div>
                      <div className="flex items-start ">
                        <p className=" mb-2 text-black">
                          Description : {assignment.description}
                        </p>
                      </div>
                    </section>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

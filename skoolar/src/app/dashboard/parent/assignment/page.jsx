"use client";
import { useEffect, useState } from "react";
import SideBar from "../../../../components/parent/Sidebar";
import { db } from "../../../../config/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { getMe } from "../action";

export default function AssignmentPage() {
  const [groupId, setGroupId] = useState([]);
  const [assignments, setAssignments] = useState([]);

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
        <div className="w-[90%] bg-white rounded-3xl px-10 py-5">
          <section className="text-black font-semibold bg-white h-[8rem] pt-2">
            <span className="text-3xl">Today's Assignments</span>
          </section>
          <div className="w-[30rem] py-1 bg-neutral-100 flex justify-evenly rounded-2xl">
            {/* Add your filter options here if needed */}
            <span className="px-3 py-2 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform focus:text-black focus:bg-white">
              Math
            </span>
            <span className="px-5 py-2 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform">
              Science
            </span>
            <span className="px-5 py-2 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform">
              Bahasa
            </span>
            <span className="px-5 py-2 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform">
              Art & Craft
            </span>
          </div>
          <div className="w-full h-[35rem] py-3 mt-3">
            <div
              className="w-full h-full py-3 overflow-auto bg-white rounded-2xl"
              id="scroll-container"
            >
              <div className="flex flex-col ">
                {assignments.length === 0 ? (
                  <p className="text-center py-10">No assignments available.</p>
                ) : (
                  assignments.map((assignment) => (
                    <section
                      key={assignment.id}
                      className="w-full py-2 px-4 border-b-[0.7px] border-slate-300 flex gap-6 items-center"
                    >
                      <div className="h-[4rem] bg-slate-300 w-[1px]" />
                      <div className="flex w-full justify-between items-center">
                        <span className="text-black">
                          <strong>Title:</strong> {assignment.title} <br />
                          <strong>Description:</strong> {assignment.description}{" "}
                          <br />
                          <strong>Due Time:</strong> {assignment.dueTime.hours}:
                          {assignment.dueTime.minutes}
                        </span>
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

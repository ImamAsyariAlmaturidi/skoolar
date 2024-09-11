"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "../../config/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { getMe } from "../../app/dashboard/parent/action";
import icon from "../../../public/assignment.png";
import Image from "next/image";
export default function Tugas({ filter }) {
  const [assignments, setAssignments] = useState([]);
  const [groupId, setGroupId] = useState([]);

  const spesificAssignment = assignments.slice(0, 3);
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
    const q = query(assignmentsRef, where("groupId", `${filter}`, groupId));

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
      <div className="w-full h-full rounded-3xl bg-white ">
        <section className="w-full h-[15%]  text-black text-[17px] font-medium flex items-center justify-between gap-4 px-6">
          <section className="flex items-center gap-3 w-full">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
              fill="#006bf8"
              stroke="currentColor"
            >
              <path
                d="M4 5.25C4 3.45508 5.45507 2 7.25 2H20.75C22.5449 2 24 3.45507 24 5.25V17.3787C23.8796 17.4592 23.7653 17.5527 23.659 17.659L22.5 18.818V5.25C22.5 4.2835 21.7165 3.5 20.75 3.5H7.25C6.2835 3.5 5.5 4.2835 5.5 5.25V22.7497C5.5 23.7162 6.2835 24.4997 7.25 24.4997H15.3177L16.8177 25.9997H7.25C5.45507 25.9997 4 24.5446 4 22.7497V5.25Z"
                strokeWidth="0.1"
              ></path>
              <path
                d="M10.5 8.75C10.5 9.44036 9.94036 10 9.25 10C8.55964 10 8 9.44036 8 8.75C8 8.05964 8.55964 7.5 9.25 7.5C9.94036 7.5 10.5 8.05964 10.5 8.75Z"
                strokeWidth="0.1"
              ></path>
              <path
                d="M9.25 15.2498C9.94036 15.2498 10.5 14.6902 10.5 13.9998C10.5 13.3095 9.94036 12.7498 9.25 12.7498C8.55964 12.7498 8 13.3095 8 13.9998C8 14.6902 8.55964 15.2498 9.25 15.2498Z"
                strokeWidth="0.1"
              ></path>
              <path
                d="M9.25 20.5C9.94036 20.5 10.5 19.9404 10.5 19.25C10.5 18.5596 9.94036 18 9.25 18C8.55964 18 8 18.5596 8 19.25C8 19.9404 8.55964 20.5 9.25 20.5Z"
                strokeWidth="0.1"
              ></path>
              <path
                d="M12.75 8C12.3358 8 12 8.33579 12 8.75C12 9.16421 12.3358 9.5 12.75 9.5H19.25C19.6642 9.5 20 9.16421 20 8.75C20 8.33579 19.6642 8 19.25 8H12.75Z"
                strokeWidth="0.1"
              ></path>
              <path
                d="M12 13.9998C12 13.5856 12.3358 13.2498 12.75 13.2498H19.25C19.6642 13.2498 20 13.5856 20 13.9998C20 14.414 19.6642 14.7498 19.25 14.7498H12.75C12.3358 14.7498 12 14.414 12 13.9998Z"
                strokeWidth="0.1"
              ></path>
              <path
                d="M12.75 18.5C12.3358 18.5 12 18.8358 12 19.25C12 19.6642 12.3358 20 12.75 20H19.25C19.6642 20 20 19.6642 20 19.25C20 18.8358 19.6642 18.5 19.25 18.5H12.75Z"
                strokeWidth="0.1"
              ></path>
              <path
                d="M25.7803 19.7803L19.7803 25.7803C19.6397 25.921 19.4489 26 19.25 26C19.0511 26 18.8603 25.921 18.7197 25.7803L15.7216 22.7823C15.4287 22.4894 15.4287 22.0145 15.7216 21.7216C16.0145 21.4287 16.4894 21.4287 16.7823 21.7216L19.25 24.1893L24.7197 18.7197C25.0126 18.4268 25.4874 18.4268 25.7803 18.7197C26.0732 19.0126 26.0732 19.4874 25.7803 19.7803Z"
                strokeWidth="0.1"
              ></path>
            </svg>
            <span>Assignment</span>
          </section>

          <div className="w-1/3 flex justify-end items-center">
            <Link href={"/dashboard/parent/assignment"} className="w-1/3">
              <span className="text-[12px] text-nowrap text-[#006bf8] bg-white p-2 px-3 rounded-xl hover:text-white hover:bg-[#006bf8]">
                See All
              </span>
            </Link>
          </div>
        </section>
        <div
          className="w-full h-[80%] py-3 overflow-auto px-4 bg-white rounded-2xl"
          id="scroll-container"
        >
          <div className="flex flex-col gap-4 py-11">
            {spesificAssignment.map((el) => {
              return (
                <>
                  <div className="w-full border mx-auto bg-white rounded-lg p-4 flex">
                    <div className="w-14 flex items-center mr-5">
                      <Image className="h-16 w-16" src={icon} />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 ">
                        {el.title}
                      </h2>
                      <p className="text-gray-600 text-sm">{el.description}</p>
                      <div className=" text-right">
                        <span className="text-xs text-gray-500">
                          Due: 30 September 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

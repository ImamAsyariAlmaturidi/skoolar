"use client";
import { useEffect, useState } from "react";
import { getUserIdOther } from "../../app/dashboard/parent/chat/action";

export default function MessageBoxOther({ text, sender }) {
  const [name, setName] = useState("");
  useEffect(() => {
    async function getOther(sender) {
      try {
        const { data } = await getUserIdOther(sender);
        if (data.studentName) {
          setName(data.studentName);
        } else {
          setName(`Mr/Ms.${data.name}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getOther(sender);
  }, []);
  return (
    <>
      <div className="col-start-1 col-end-8 p-3 rounded-lg">
        <div className="flex flex-row">
          <div className="flex items-center justify-center text-white h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
            A
          </div>
          <div>
            <p className="ml-3 text-sm mb-2 text-black">{name || "teacher"}</p>
            <div className="relative ml-3 text-sm bg-neutral-200 py-2 px-4 rounded-lg rounded-tl-none text-neutral-800">
              {text}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

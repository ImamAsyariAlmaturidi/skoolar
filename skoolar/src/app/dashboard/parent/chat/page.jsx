"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ChatBox from "../../../../components/parent/ChatBox";
import SideBar from "../../../../components/parent/Sidebar";
import { getAllGroup } from "./action";

export default function ChatPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Memfetch data dari API saat komponen mount
    const fetchData = async () => {
      try {
        const result = await getAllGroup();
        setData(result.data || []); // Mengupdate state dengan data yang difetch
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData(); // Memanggil fungsi fetch
  }, []); // [] artinya efek ini hanya akan dijalankan sekali, saat komponen mount

  return (
    <>
      <div className="w-full flex gap-3 px-5 py-10 h-screen bg-[#F1F7FE]">
        <SideBar />
        <div className="flex w-full">
          <div className="bg-white w-[30rem] rounded-2xl rounded-r-none border-r border-neutral-200 border-solid">
            <div className="border-b border-neutral-200 flex justify-start items-center h-[11%]">
              <p className="ml-8 text-[#3166ec] font-semibold text-2xl">
                Message
              </p>
              {/* <Searchbar /> */}
            </div>
            <div>
              <p className="ml-8 mt-3 mb-2 text-xs text-neutral-400">
                Group chat
              </p>
              {data.map((group) => (
                <Link
                  key={group._id}
                  href={`/dashboard/parent/chat/${group._id}`}
                >
                  <ChatBox data={group} />
                </Link>
              ))}
            </div>
            {/* <div>
              <p className="ml-8 mt-7 mb-2 text-xs text-neutral-400">
                Personal Message
              </p>
              <ChatBox />
              <ChatBox />
            </div> */}
          </div>
          <div className="w-full bg-white ml-0 rounded-2xl rounded-l-none">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-3xl font-bold text-slate-300">
                Select your message
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

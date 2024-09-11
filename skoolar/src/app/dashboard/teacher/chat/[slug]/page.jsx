"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ChatBox from "../../../../../components/parent/ChatBox";
import ChatRoom from "../../../../../components/parent/ChatRoom";
import { getAllGroup } from "../action";
import HeaderChat from "../../../../../components/parent/HeaderChat";
import TeacherSideBar from "../../../../../components/teacher/Sidebar";

export default function ParentDetailPage({ params }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data saat komponen mount
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
        <TeacherSideBar />
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
              {data.map((groups) => (
                <Link
                  key={groups._id}
                  href={`/dashboard/teacher/chat/${groups._id}`}
                >
                  <ChatBox data={groups} />
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
            <div className="border-b border-neutral-200 py-2 flex justify-start items-center h-[11%]">
              <div className="rounded-full bg-orange-200 border border-neutral-200 w-12 h-12 flex ml-8 items-center justify-center">
                <img
                  className="h-7"
                  src="https://www.iconpacks.net/icons/2/free-apple-icon-2327-thumb.png"
                  alt=""
                />
              </div>
              <HeaderChat slug={params.slug} />
            </div>
            <div className="w-full h-[88%]">
              <ChatRoom id={params.slug} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

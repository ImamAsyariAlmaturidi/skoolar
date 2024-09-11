import Link from "next/link";
import ChatRoom from "../../../../components/parent/ChatRoom";
import ChatBox from "../../../../components/parent/ChatBox";
import { getAllGroup } from "./action";
import TeacherSideBar from "../../../../components/teacher/Sidebar";
export default async function TeacherClassroom() {
  const { data } = await getAllGroup();
  return (
    <>
      <div className="w-full flex gap-3 px-5 py-10 h-screen bg-[#F1F7FE]">
        <TeacherSideBar />
        <div className="flex w-full">
          <div className=" bg-white w-[30rem]  rounded-2xl  rounded-r-none border-r border-neutral-200 border-solid">
            <div className="border-b  border-neutral-200 flex justify-start items-center h-[11%]">
              <p className="ml-8  text-[#3166ec] font-semibold text-2xl">
                Message
              </p>
              {/* <Searchbar /> */}
            </div>
            <div>
              <p className="ml-8 mt-3 mb-2 text-xs text-neutral-400">
                Group chat
              </p>
              {data?.map((groups) => {
                return (
                  <>
                    <Link href={`/dashboard/teacher/chat/${groups._id}`}>
                      <ChatBox data={groups} />
                    </Link>
                  </>
                );
              })}
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

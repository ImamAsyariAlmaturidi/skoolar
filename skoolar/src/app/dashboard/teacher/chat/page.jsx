import TeacherChatRoom from "../../../../components/teacher/Chatroom";
import TeacherChatBox from "../../../../components/teacher/Chatbox";
import TeacherSideBar from "../../../../components/teacher/Sidebar";

export default function TeacherClassroom() {
  return (
    <>
      <div className="flex gap-3 px-5 py-10 h-screen bg-[#f0f6fe]">
        <TeacherSideBar />
        <div className="flex w-full">
          <div className=" bg-white w-[30%] rounded-2xl rounded-r-none border-r border-neutral-200 border-solid">
            <div className="border-b border-neutral-200 pb-5 h-[11%] py-6 flex items-center px-5 gap-4">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="blue"
                stroke="#3166ec"
                strokeWidth="0.8"
              >
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <path
                    d="M21.331 10.669v-7.997h-18.659v14.394h7.997v7.997h11.063l4.265 4.264h0.665v-4.264h2.666v-14.394h-7.997zM3.738 16v-12.262h16.527v6.931h-9.596v5.331h-6.931zM28.262 23.997h-2.666v3.422l-3.423-3.422h-10.439v-12.262h16.527v12.262z"
                    fill="currentColor"
                  />
                </g>
              </svg>
              <p className="text-neutral-700 font-semibold text-2xl">Message</p>
            </div>
            <div>
              <p className="ml-8 mt-3 mb-2 text-xs text-neutral-400">
                Group chat
              </p>
              <TeacherChatBox />
              <TeacherChatBox />
            </div>
            <div>
              <p className="ml-8 mt-7 mb-2 text-xs text-neutral-400">
                Personal Message
              </p>
              <TeacherChatBox />
              <TeacherChatBox />
            </div>
          </div>
          <div className="w-[70%] bg-white ml-0 rounded-2xl rounded-l-none">
            <div className="border-b border-neutral-200 pb-4 flex h-[11%]">
              <div className="rounded-full bg-orange-200 border border-neutral-200 w-12 h-12 flex mt-5 ml-8 items-center justify-center">
                <img
                  className="h-7 "
                  src="https://www.iconpacks.net/icons/2/free-apple-icon-2327-thumb.png"
                  alt=""
                />
              </div>
              <div>
                <p className="ml-5 mt-5 text-neutral-700 font-medium text-lg">
                  Class 6A
                </p>
                <p className="ml-5 text-neutral-400 font-normal text-sm">
                  21 Participant
                </p>
              </div>
            </div>
            <div className="w-full h-[88%] flex justify-center items-center">
              <span className="text-3xl font-bold text-neutral-300 ">
                Select your chat
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import TeacherChatRoom from "../../../../components/teacher/Chatroom";
import TeacherChatBox from "../../../../components/teacher/Chatbox";
import TeacherSideBar from "../../../../components/teacher/Sidebar";

export default function TeacherClassroom() {
  return (
    <>
      <div className="flex gap-3 px-5 py-10 h-screen bg-[#F1F7FE]">
        <TeacherSideBar />
        <div className="flex w-full">
          <div className=" bg-white w-[30rem]  rounded-2xl  rounded-r-none border-r border-neutral-200 border-solid">
            <div className="border-b border-neutral-200 pb-5 pt-3 ">
              <p className="ml-8 mt-5 text-[#3166ec] font-semibold text-2xl">
                Message
              </p>
              {/* <Searchbar /> */}
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
          <div className="w-full bg-white ml-0 rounded-2xl rounded-l-none">
            <div className="border-b border-neutral-200 pb-4 flex   h-[11%]">
              <div className="rounded-full bg-orange-200 border border-neutral-200 w-12 h-12 flex mt-5 ml-8 items-center justify-center">
                <img
                  className="h-7 "
                  src="https://www.iconpacks.net/icons/2/free-apple-icon-2327-thumb.png"
                  alt=""
                />
              </div>
              <div>
                <p className="ml-5 mt-5 text-black font-medium text-lg">
                  Class 6A
                </p>
                <p className="ml-5 text-neutral-400 font-normal text-sm">
                  21 Participant
                </p>
              </div>
            </div>
            <div className="w-full h-[88%]">
              <span>Select your chat</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

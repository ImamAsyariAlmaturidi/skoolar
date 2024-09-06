import PrentNotification from "../../../../components/parent/Notifications";
import SideBar from "../../../../components/parent/Sidebar";

export default function NotificationPage() {
  return (
    <>
      <div className="flex gap-3 px-5 py-10 h-screen bg-[#F1F7FE]">
        <SideBar />
        <div className="w-full h-full bg-white rounded-2xl flex">
          <div className="w-1/4 h-full border-r border-neutral-200 rounded-2xl rounded-tr-none rounded-br-none">
            <header className="flex items-center p-3 pb-4  gap-3  text-[#006bf8] border-b border-neutral-300 ">
              <svg
                width="36px"
                height="36px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1.3"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g clipPath="url(#clip0_15_159)">
                    <rect width="24" height="24"></rect>
                    <path
                      d="M9.5 19C8.89555 19 7.01237 19 5.61714 19C4.87375 19 4.39116 18.2177 4.72361 17.5528L5.57771 15.8446C5.85542 15.2892 6 14.6774 6 14.0564C6 13.2867 6 12.1434 6 11C6 9 7 5 12 5C17 5 18 9 18 11C18 12.1434 18 13.2867 18 14.0564C18 14.6774 18.1446 15.2892 18.4223 15.8446L19.2764 17.5528C19.6088 18.2177 19.1253 19 18.382 19H14.5M9.5 19C9.5 21 10.5 22 12 22C13.5 22 14.5 21 14.5 19M9.5 19C11.0621 19 14.5 19 14.5 19"
                      stroke="currentColor"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 5V3"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_15_159">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </g>
              </svg>
              <span className="text-[17px] text-black font-medium">
                All Notifications
              </span>
            </header>
            <div className="h-[44rem] w-full py-3 overflow-y-auto px-4">
              <div className="flex flex-col gap-4 ">
                <PrentNotification />
                <PrentNotification />
                <PrentNotification />
                <PrentNotification />
                <PrentNotification />
                <PrentNotification />
                <PrentNotification />
                <PrentNotification />
                <PrentNotification />
                <PrentNotification />
              </div>
            </div>
          </div>
          <div className="w-3/4 h-full ">
            <header className="flex justify-end px-4 py-3 gap-3 bg-white border-b border-neutral-300 ">
              <input
                placeholder="Search for any messages"
                className="w-[20rem] py-[7px] px-3 bg-slate-50 rounded-md border border-neutral-300"
              />
            </header>
            <div className="w-full h-[92%] bg-neutral-50 flex justify-center items-center">
              <span className="text-4xl text-neutral-200">
                Choose Your Message
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

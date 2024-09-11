import Link from "next/link";

export default function Pengumuman() {
  return (
    <>
      <div className="w-full rounded-2xl px-2 bg-none">
        <section className="text-black text-[17px] font-medium flex items-center justify-between gap-4  mt-2">
          <section className="flex items-center gap-3">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#006bf8"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill="none"
                  stroke="#006bf8"
                  strokeWidth="1.512"
                  d="M11,15 C14,15 19,19 19,19 L19,3 C19,3 14,7 11,7 C11,7 11,15 11,15 Z M5,15 L8,23 L12,23 L9,15 M19,14 C20.657,14 22,12.657 22,11 C22,9.343 20.657,8 19,8 M11,19 C11.9999997,18.9999994 14,18 14,16 M2,11 C2,7.88888889 3.7912,7 6,7 L11,7 L11,15 L6,15 C3.7912,15 2,14.1111111 2,11 Z"
                />{" "}
              </g>
            </svg>

            <span>School Announcement</span>
          </section>
          <Link href={"/dashboard/parent/announcement"}>
            <span className="text-[12px] text-[#006bf8] bg-white p-2 px-3 rounded-xl hover:text-white hover:bg-[#006bf8]">
              See All
            </span>
          </Link>
        </section>
        <div
          className="w-full py-4 flex items-center gap-3 overflow-x-auto bg-none rounded-2xl"
          id="scroll-container"
        >
          <div className="w-[15rem] h-[10rem] bg-white flex-shrink-0 rounded-2xl"></div>
          <div className="w-[15rem] h-[10rem] bg-white flex-shrink-0 rounded-2xl"></div>
          <div className="w-[15rem] h-[10rem] bg-white flex-shrink-0 rounded-2xl"></div>
          <div className="w-[15rem] h-[10rem] bg-white flex-shrink-0 rounded-2xl"></div>
          <div className="w-[15rem] h-[10rem] bg-white flex-shrink-0 rounded-2xl"></div>
        </div>
      </div>
    </>
  );
}

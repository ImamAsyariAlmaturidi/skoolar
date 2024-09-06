import Link from "next/link";

export default function Percakapan() {
  return (
    <>
      <div className="w-full h-[21rem] rounded-3xl ">
        <section className="w-full h-[3rem] text-black text-[17px] font-medium flex items-start justify-between gap-4 px-3">
          <section className="flex items-center gap-3">
            <svg
              width="33px"
              height="33px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#006bf8"
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
            <span>Percakapan</span>
          </section>
          <Link href={"/dashboard/parent/chat"}>
            <span className="text-[12px] text-[#006bf8] bg-white p-2 px-3 rounded-xl hover:text-white hover:bg-[#006bf8]">
              Lihat Semua
            </span>
          </Link>
        </section>
        <div className="mt-2 pt-2 px-2 pb-2 flex hover:bg-neutral-200 hover:rounded-2xl cursor-pointer">
          <div className="rounded-full bg-orange-200 border border-neutral-200 w-14 h-11 flex items-center justify-center">
            <img
              className="h-7 "
              src="https://www.iconpacks.net/icons/2/free-apple-icon-2327-thumb.png"
              alt=""
            />
          </div>
          <div className="w-full mr-4">
            <div className="flex justify-between w-full">
              <p className="ml-4 font-semibold text-[0.9rem] text-black">
                Class 6A
              </p>
              <p className="text-neutral-500 text-[0.8rem]">05.50</p>
            </div>
            <p className="ml-4  text-[0.8rem] text-neutral-500">
              Ms.Lita: Okay moms
            </p>
          </div>
        </div>
        <div className="pt-2 px-2 pb-2 flex hover:bg-neutral-200 hover:rounded-2xl cursor-pointer">
          <div className="rounded-full bg-orange-200 border border-neutral-200 w-14 h-11 flex items-center justify-center">
            <img
              className="h-7 "
              src="https://www.iconpacks.net/icons/2/free-apple-icon-2327-thumb.png"
              alt=""
            />
          </div>
          <div className="w-full mr-4">
            <div className="flex justify-between w-full">
              <p className="ml-4 font-semibold text-[0.9rem] text-black">
                Class 6A
              </p>
              <p className="text-neutral-500 text-[0.8rem]">05.50</p>
            </div>
            <p className="ml-4  text-[0.8rem] text-neutral-500">
              Ms.Lita: Okay moms
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

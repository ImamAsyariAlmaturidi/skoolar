import TeacherSideBar from "../../../components/teacher/Sidebar";
import Link from "next/link";
export default function TeacherDashboard() {
  return (
    <>
      <div className="w-full flex gap-3 px-5 py-10 h-screen bg-[#F1F7FE]">
        <TeacherSideBar />
        <div className=" h-full w-[91%] rounded-2xl rounded-tl-none rounded-bl-none">
          <div className="w-full h-1/2 flex gap-4">
            <div className="w-1/3 h-[95%] bg-white rounded-2xl">
              <div className="w-full h-full rounded-2xl px-4 py-4">
                <div className="w-[8rem] h-[8rem] rounded-full border-slate-300 border flex items-center justify-center">
                  <img
                    className="w-[80%] h-[80%] object-cover rounded-full "
                    src="https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg"
                    alt="Profile"
                  />
                </div>
                <div className="w-full h-full px-4 pt-7 flex flex-col space-y-6">
                  <span className="text-3xl text-black font-medium">
                    Adelaine Fischer
                  </span>
                  <div className="space-y-2">
                    <p className="text-slate-600 text-[13px] ">
                      Teachers of class 6A
                    </p>
                    <p className="text-slate-600 text-[13px] ">
                      Female , 25 years old
                    </p>
                    <p className="text-slate-600 text-[13px] ">
                      Currently working at Tunas Bangsa School
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/3 h-[95%] rounded-2xl px-4 py-4 bg-white">
              <section className="text-black text-[17px] h-12 font-medium flex items-center justify-between gap-4 mt-2">
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
                <span className="text-[12px] text-[#006bf8] bg-white p-2 px-3 rounded-xl hover:text-white hover:bg-[#006bf8]">
                  Lihat Semua
                </span>
              </section>
              <div
                className="w-full py-5 flex items-center gap-3 overflow-x-auto bg-none rounded-2xl mt-3"
                id="scroll-container"
              >
                <div className="w-[15rem] h-[13rem] bg-neutral-200 flex-shrink-0 rounded-2xl"></div>
                <div className="w-[15rem] h-[13rem] bg-neutral-200 flex-shrink-0 rounded-2xl"></div>
                <div className="w-[15rem] h-[13rem] bg-neutral-200 flex-shrink-0 rounded-2xl"></div>
                <div className="w-[15rem] h-[13rem] bg-neutral-200 flex-shrink-0 rounded-2xl"></div>
                <div className="w-[15rem] h-[13rem] bg-neutral-200 flex-shrink-0 rounded-2xl"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 flex gap-4 rounded-2xl">
            <div className="w-2/3 h-full rounded-2xl bg-white ">
              <section className="w-full h-[4rem] text-black text-[17px] font-medium flex items-center justify-between gap-4 px-6">
                <section className="flex items-center gap-3">
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
                  <span>Class 6A Assignment</span>
                </section>
                <Link href={"/dashboard/teacher/assignment"}>
                  <span className="text-[12px] text-[#006bf8] bg-white p-2 px-3 rounded-xl hover:text-white hover:bg-[#006bf8]">
                    See All
                  </span>
                </Link>
              </section>
              <div
                className="w-full h-[20rem] py-4  overflow-auto px-2 bg-white  border-8 border-white rounded-2xl"
                id="scroll-container"
              >
                <div className="flex flex-col gap-4">
                  <section className="w-full h-[10rem] bg-neutral-200 hover:scale-95 transition-transform pt-5 py-3 px-5  rounded-2xl relative">
                    <span className="text-black text-2xl">IPA</span>
                    <p className="text-neutral-600 mt-1 text-[13px]">
                      Hai murid murid , tolong kerjakan tugas IPA bab 3 ,
                      halaman 22-24 yaa, dikumpul besok.{" "}
                    </p>
                    <span className="absolute text-black bottom-3 right-5 text-[12px]">
                      Lebih Lanjut
                    </span>
                  </section>
                  <section className="w-full h-[10rem] py-3 px-4 bg-neutral-200 rounded-2xl relative">
                    <span className="text-black text-2xl">IPS</span>
                    <p className="text-neutral-600 mt-1 text-[13px]">
                      Hai murid murid , tolong kerjakan tugas IPA bab 3 ,
                      halaman 22-24 yaa, dikumpul besok.{" "}
                    </p>
                    <span className="absolute text-black bottom-3 right-5 text-[12px]">
                      Lebih Lanjut
                    </span>
                  </section>
                  <section className="w-full h-[10rem] py-2 px-4 bg-neutral-200 rounded-2xl relative">
                    <span className="text-black text-2xl">Matematika</span>
                    <p className="text-neutral-600 mt-1 text-[13px]">
                      Hai murid murid , tolong kerjakan tugas IPA bab 3 ,
                      halaman 22-24 yaa, dikumpul besok.{" "}
                    </p>
                    <span className="absolute text-black bottom-3 right-5 text-[12px]">
                      Lebih Lanjut
                    </span>
                  </section>
                  <section className="w-full h-[10rem] py-2 px-4 bg-neutral-200 rounded-2xl relative">
                    <span className="text-black text-2xl">Prakarya</span>
                    <p className="text-neutral-600 mt-1 text-[13px]">
                      Hai murid murid , tolong kerjakan tugas IPA bab 3 ,
                      halaman 22-24 yaa, dikumpul besok.{" "}
                    </p>
                    <span className="absolute text-black bottom-3 right-5 text-[12px]">
                      Lebih Lanjut
                    </span>
                  </section>
                  <section className="w-full h-[10rem] py-2 px-4 bg-neutral-200 rounded-2xl relative">
                    <span className="text-black text-2xl">IPA</span>
                    <p className="text-neutral-600 mt-1 text-[13px]">
                      Hai murid murid , tolong kerjakan tugas IPA bab 3 ,
                      halaman 22-24 yaa, dikumpul besok.{" "}
                    </p>
                    <span className="absolute text-black bottom-3 right-5 text-[12px]">
                      Lebih Lanjut
                    </span>
                  </section>
                </div>
              </div>
            </div>
            <div className="w-1/3 h-full py-3 px-4 rounded-3xl bg-white">
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
                  <span>6A Classroom</span>
                </section>
                <Link href={"/tugas"}>
                  <span className="text-[12px] text-[#006bf8] bg-white p-2 px-3 rounded-xl hover:text-white hover:bg-[#006bf8]">
                    Lihat Semua
                  </span>
                </Link>
              </section>
              <div className="mt-2 pt-2 px-2 pb-2 flex hover:bg-neutral-200 hover:rounded-2xl cursor-pointer bg-white">
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
          </div>
        </div>
      </div>
    </>
  );
}

import Percakapan from "../../../components/parent/percakapan";

import TeacherSideBar from "../../../components/teacher/Sidebar";
import Link from "next/link";
import { getAllGroup, getMe } from "../parent/action";
import { getGroupTeacher, getSchoolAnnouncement } from "./action";
import Tugas from "../../../components/parent/tugas";
export default async function TeacherDashboard() {
  const me = await getMe();
  const { data } = await getGroupTeacher(me.GroupId);
  const groups = await getAllGroup();
  const groupData = groups.data;
  const GeneralAnnouncement = await getSchoolAnnouncement();
  const AnnouncementData = GeneralAnnouncement.data;

  return (
    <>
      <div className="w-full h-screen bg-[#f0f6fe] flex gap-4 px-5 py-10">
        <TeacherSideBar />
        <div className="w-[91%] h-full overflow-y-auto overflow-x-auto">
          <div className="w-full h-[22rem] flex gap-4 pb-6 ">
            <div className="w-1/3 bg-white rounded-2xl">
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
                    {me?.name}
                  </span>
                  <div className="space-y-2">
                    <p className="text-slate-600 text-[13px] ">
                      Teachers of class {data.name}
                    </p>
                    <p className="text-slate-600 text-[13px] ">
                      Currently working at Tunas Bangsa School
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/3 rounded-2xl px-4 py-4 bg-white">
              <section className="text-black text-[17px] font-medium flex items-center justify-between gap-4 mt-2">
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
                      <path
                        fill="none"
                        stroke="#006bf8"
                        strokeWidth="1.512"
                        d="M11,15 C14,15 19,19 19,19 L19,3 C19,3 14,7 11,7 C11,7 11,15 11,15 Z M5,15 L8,23 L12,23 L9,15 M19,14 C20.657,14 22,12.657 22,11 C22,9.343 20.657,8 19,8 M11,19 C11.9999997,18.9999994 14,18 14,16 M2,11 C2,7.88888889 3.7912,7 6,7 L11,7 L11,15 L6,15 C3.7912,15 2,14.1111111 2,11 Z"
                      />
                    </g>
                  </svg>

                  <span>School Announcement</span>
                </section>
                {/* <Link href={"/dashboard/teacher/announcement"}> */}
                {/* <span className="text-[12px] text-[#006bf8] bg-white p-2 px-3 rounded-xl hover:text-white hover:bg-[#006bf8]">
                  Lihat Semua
                </span> */}
                {/* </Link> */}
              </section>
              <div
                className="w-full py-5 flex items-center gap-4 bg-none rounded-2xl mt-3 max-w-screen-lg overflow-x-auto"
                id="scroll-container"
              >
                {AnnouncementData?.map((el, index) => (
                  <div
                    className="w-[20rem] h-[12rem] bg-[#f0f5fd] rounded-2xl flex-shrink-0 px-4"
                    key={index}
                  >
                    <img className="w-10 h-10 mt-3" src={el.image} />
                    <p className="text-neutral-600 font-semibold text-xl mt-3">
                      {el.title}
                    </p>
                    <p className="text-neutral-400 font-light text-xs line-clamp-3 mt-1 leading-relaxed">
                      {el.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-[27rem] rounded-3xl flex gap-3">
            <Tugas filter="==" />
            <div className="w-1/2 h-full bg-white rounded-xl px-7 py-4">
              <Percakapan data={groupData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

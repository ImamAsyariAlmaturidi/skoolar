import { getMe, getSchoolAnnouncement } from "./action";
import Pemberitahuan from "../../../components/parent/pemberitahuan";
import Pengumuman from "../../../components/parent/pengumuman";
import Percakapan from "../../../components/parent/percakapan";
import SideBar from "../../../components/parent/Sidebar";
import Tugas from "../../../components/parent/tugas";
import { getAllGroup } from "./action";
export default async function Dashboard() {
  const data = await getMe();
  const groups = await getAllGroup();
  const groupData = groups.data;
  const GeneralAnnouncement = await getSchoolAnnouncement();
  const AnnouncementData = GeneralAnnouncement.data;

  return (
    <>
      <div className="w-full h-screen bg-[#f0f6fe] flex gap-3 px-5 py-10">
        <SideBar />
        <div className="w-[91%] h-full flex gap-3 overflow-y-auto">
          <div className="w-3/4 h-full overflow-y-auto">
            <div className="h-[9rem] w-full pl-10 pt-8 mb-4 bg-[#006bf8] rounded-3xl text-white relative flex">
              <div>
                <p className="text-white text-3xl  font-bold">
                  Hello, {data?.name}👋
                </p>
                <p className="text-sm mt-3 font-light leading-relaxed">
                  Every lesson you learn today is <br />a valuable investment
                  for achieving success in your future!
                </p>
              </div>
            </div>
            <Pengumuman data={AnnouncementData} />
            <div className="w-full h-[27rem] rounded-3xl flex gap-3 mt-1 ">
              <div className="w-1/2 h-[92%] bg-white rounded-xl px-7 py-4">
                <Percakapan data={groupData} />
              </div>
              <div className="w-1/2 h-[92%] bg-white rounded-xl px-7 py-4">
                <Tugas />
              </div>
            </div>
          </div>
          <div className="w-1/4 h-full bg-white rounded-3xl px-4 py-4">
            <Pemberitahuan />
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import Pemberitahuan from "../../../components/pemberitahuan";
import Pengumuman from "../../../components/pengumuman";
import Percakapan from "../../../components/percakapan";
import SideBar from "../../../components/sidebar";
import Tugas from "../../../components/tugas";

export default function Dashboard() {
  return (
    <>
      <div className="w-full h-screen bg-[#f0f6fe] flex gap-3 px-5 py-10">
        <SideBar />
        <div className="w-[91%] h-full flex gap-3">
          <div className="w-3/4 h-full overflow-hidden">
            <div className="h-[9rem] w-full pl-14 pt-8 mb-4 bg-[#006bf8] rounded-3xl text-white relative flex">
              <div>
                <p className="text-white text-3xl  font-bold">
                  Hello, Samsudinho ! 👋
                </p>
                <p className="text-sm mt-3 font-light">
                  Setiap pelajaran yang kamu pelajari hari ini adalah <br />
                  investasi berharga untuk meraih kesuksesan di masa depanmu!
                </p>
              </div>
            </div>
            <Pengumuman />

            <div className="w-full h-[27rem] rounded-3xl flex gap-3">
              <div className="w-1/2 h-full bg-white rounded-3xl px-7 py-4">
                <Percakapan />
              </div>
              <div className="w-1/2 h-full bg-white rounded-3xl px-7 py-4">
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

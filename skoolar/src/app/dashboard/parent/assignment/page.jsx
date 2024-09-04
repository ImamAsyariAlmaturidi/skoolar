import SideBar from "../../../../components/Sidebar";

export default function AssignmentPage() {
  return (
    <>
      <div className="flex gap-3 px-5 py-10 h-screen bg-[#f0ecea]">
        <SideBar className="w-1/4 lg:w-1/5" />
        <div className="w-[90%] bg-white rounded-3xl px-10 py-5">
          <section className="text-black font-semibold bg-white h-[8rem] pt-2 ">
            <span className="text-3xl">Tugas Hari Ini</span>
            <p className="text-[15px] text-neutral-600 mt-5">
              Hai parents , ini tugas buah hati anda hari ini , tolong di bantu
              ya , terima kasih.
            </p>
          </section>
          <div className="w-[30rem] py-1 bg-neutral-100 flex justify-evenly rounded-2xl">
            <span className="px-3 py-2 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform focus:text-black focus:bg-white ">
              Matematika
            </span>
            <span className="px-5 py-2 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform">
              IPA
            </span>
            <span className="px-5 py-2 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform">
              Bahasa
            </span>
            <span className="px-5 py-2 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform">
              Prakarya
            </span>
          </div>
          <div className="w-full h-[35rem] py-3 mt-3">
            <div
              className="w-full h-full py-3 overflow-auto bg-white rounded-2xl"
              id="scroll-container"
            >
              <div className="flex flex-col gap-4">
                <section className="w-full py-2 px-4 rounded-2xl border border-slate-300 flex gap-6 items-center my-2">
                  <p className="text-red-400 text-1xl">
                    Rabu <p className="flex justify-center text-2xl">26</p>
                  </p>
                  <div className="h-[4rem] bg-slate-300 w-[1px]" />
                  <div className="flex w-full justify-between items-center">
                    <span className="text-black">
                      ● Pr IPS halaman 24, dikumpul Senin
                    </span>
                    <button className="px-6 py-3 bg-neutral-300 rounded-2xl text-black hover:bg-black hover:text-white">
                      Terima
                    </button>
                  </div>
                </section>
                <section className="w-full py-2 px-4 rounded-2xl border border-slate-300 flex gap-6 items-center my-2">
                  <p className="text-black text-1xl">
                    Rabu <p className="flex justify-center text-2xl">26</p>
                  </p>
                  <div className="h-[4rem] bg-slate-300 w-[1px]" />
                  <div className="flex w-full justify-between items-center">
                    <span className="text-black overflow-x-auto pr-6">
                      ● Pr IPS halaman 24, dikumpul Senin Lorem ipsum dolor sit,
                      amet consectetur adipisicing elit. Voluptas itaque enim
                      cum dicta exercitationem nam ipsum! Facilis dolor harum
                      eos sapiente praesentium fugit odio iure molestiae, ipsa
                      debitis fuga sequi!
                    </span>
                    <button className="px-6 py-3 bg-neutral-300 rounded-2xl text-black hover:bg-black hover:text-white">
                      Terima
                    </button>
                  </div>
                </section>
                <section className="w-full py-2 px-4 rounded-2xl border border-slate-300 flex gap-6 items-center my-2">
                  <p className="text-black text-1xl">
                    Rabu <p className="flex justify-center text-2xl">26</p>
                  </p>
                  <div className="h-[4rem] bg-slate-300 w-[1px]" />
                  <div className="flex w-full justify-between items-center">
                    <span className="text-black">
                      ● Pr IPS halaman 24, dikumpul Senin
                    </span>
                    <button className="px-6 py-3 bg-neutral-300 rounded-2xl text-black hover:bg-black hover:text-white">
                      Terima
                    </button>
                  </div>
                </section>
                <section className="w-full py-2 px-4 rounded-2xl border border-slate-300 flex gap-6 items-center my-2">
                  <p className="text-red-400 text-1xl">
                    Rabu <p className="flex justify-center text-2xl">26</p>
                  </p>
                  <div className="h-[4rem] bg-slate-300 w-[1px]" />
                  <div className="flex w-full justify-between items-center">
                    <span className="text-black">
                      ● Pr IPS halaman 24, dikumpul Senin
                    </span>
                    <button className="px-6 py-3 bg-neutral-300 rounded-2xl text-black hover:bg-black hover:text-white">
                      Terima
                    </button>
                  </div>
                </section>
                <section className="w-full py-2 px-4 rounded-2xl border border-slate-300 flex gap-6 items-center my-2">
                  <p className="text-black text-1xl">
                    Rabu <p className="flex justify-center text-2xl">26</p>
                  </p>
                  <div className="h-[4rem] bg-slate-300 w-[1px]" />
                  <div className="flex w-full justify-between items-center">
                    <span className="text-black">
                      ● Pr IPS halaman 24, dikumpul Senin
                    </span>
                    <button className="px-6 py-3 bg-neutral-300 rounded-2xl text-black hover:bg-black hover:text-white">
                      Terima
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

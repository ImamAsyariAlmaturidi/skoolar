import SideBar from "../../../../components/parent/Sidebar";

export default function AssignmentPage() {
  return (
    <>
      <div className="w-full h-screen bg-[#f0f6fe] flex gap-3 px-5 py-10">
        <SideBar className="w-1/4 lg:w-1/5" />
        <div className="w-[91%] h-full bg-white rounded-2xl overflow-y-auto px-10 py-6">
          <section className="text-black font-semibold bg-white h-[8rem] pt-2 ">
            <span className="text-3xl">Today's Assignments</span>
          </section>
          <div className="w-[30rem] py-1 bg-neutral-100 flex justify-evenly rounded-2xl">
            <span className="px-3 py-2 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform focus:text-black focus:bg-white ">
              Math
            </span>
            <span className="px-5 py-2 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform">
              Science
            </span>
            <span className="px-5 py-2 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform">
              Bahasa
            </span>
            <span className="px-5 py-2 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform">
              Art & Craft
            </span>
          </div>
          <div className="w-full py-3 mt-3">
            <div
              className="w-full h-full py-3 overflow-y-auto overflow-x-hidden bg-white rounded-2xl"
              id="scroll-container"
            >
              <div className="flex flex-col ">
                <section className="w-full py-2 px-4  border-b-[0.7px] border-slate-300 flex gap-6 items-center">
                  <p className="text-red-400 text-1xl">
                    Wednesday <p className="flex justify-center text-2xl">26</p>
                  </p>
                  <div className="h-[4rem] bg-slate-300 w-[1px]" />
                  <div className="flex w-full justify-between items-center">
                    <span className="text-black">
                      ● Social Studies page 24 until 27 , tasks will be
                      submitted on sunday , thank you
                    </span>
                  </div>
                </section>
                <section className="w-full py-2 px-4  border-b-[0.7px] border-slate-300 flex gap-6 items-center">
                  <p className="text-red-400 text-1xl">
                    Wednesday <p className="flex justify-center text-2xl">26</p>
                  </p>
                  <div className="h-[4rem] bg-slate-300 w-[1px]" />
                  <div className="flex w-full justify-between items-center">
                    <span className="text-black">
                      ● Social Studies page 24 until 27 , tasks will be
                      submitted on sunday , thank you
                    </span>
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

import SideBar from "../../../../components/parent/Sidebar";

export default function Pembayaran() {
  return (
    <>
      <div className="w-full h-screen bg-[#f0ecea] flex gap-3 px-5 py-10">
        <SideBar className="w-1/4 lg:w-1/5" />
        <div className="w-[90%] bg-white rounded-3xl px-10 py-5">
          <section className="text-black font-semibold bg-white h-[9rem] pt-2 relative">
            <span className="text-3xl">Pembayaran</span>
            <div className="flex gap-6 px-4 py-2 absolute bottom-2 rounded-2xl bg-neutral-100">
              <span className="px-3 py-1 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform focus:text-black focus:bg-white ">
                Transaksi Berlangsung
              </span>
              <span className="px-3 py-1 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform focus:text-black focus:bg-white ">
                Riwayat
              </span>
            </div>
          </section>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] mt-6 border-collapse">
              <thead className="text-neutral-600 bg-neutral-100 sticky top-0 z-10 rounded-t-2xl border-slate-400 border-b-2 ">
                <tr className="h-[4rem] mb-10">
                  <th className=" px-4 py-2 text-left w-[5%] ">No</th>
                  <th className="px-4 py-2 text-left w-[15%] ">Tanggal</th>
                  <th className="px-4 py-2 text-left w-[50%] ">Keterangan</th>
                  <th className="px-4 py-2 text-left w-[15%] ">Sebelum</th>
                  <th className="px-4 py-2 text-left ">Jumlah</th>
                </tr>
              </thead>
              <tbody className="text-black text-[15px]">
                <tr className="h-[3rem] border-neutral-300 border-b-2">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">13 Maret 2024</td>
                  <td className="px-4 py-2">
                    Pembayaran Uang Sekolah Bulan Maret
                  </td>
                  <td className="px-4 py-2">15 Maret 2024</td>
                  <td className="px-4 py-2">Rp 1.400.000,00</td>
                </tr>
                <tr className="h-[3rem] border-neutral-300 border-b-2">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">13 Maret 2024</td>
                  <td className="px-4 py-2">
                    Pembayaran Uang Bangunan per tahun ajaran 2024
                  </td>
                  <td className="px-4 py-2">15 Maret 2024</td>
                  <td className="px-4 py-2">Rp 600.000,00</td>
                </tr>
                <tr className="h-[3rem] border-neutral-300 border-b-2">
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">13 Maret 2024</td>
                  <td className="px-4 py-2">
                    Pembayaran Uang Bangunan per tahun ajaran 2024
                  </td>
                  <td className="px-4 py-2">15 Maret 2024</td>
                  <td className="px-4 py-2">Rp 600.000,00</td>
                </tr>
                <tr className="h-[3rem] border-neutral-300 border-b-2">
                  <td className="px-4 py-2">4</td>
                  <td className="px-4 py-2">13 Maret 2024</td>
                  <td className="px-4 py-2">
                    Pembayaran Uang Bangunan per tahun ajaran 2024
                  </td>
                  <td className="px-4 py-2">15 Maret 2024</td>
                  <td className="px-4 py-2">Rp 600.000,00</td>
                </tr>
                <tr className="h-[3rem] border-neutral-300 border-b-2">
                  <td className="px-4 py-2">5</td>
                  <td className="px-4 py-2">13 Maret 2024</td>
                  <td className="px-4 py-2">
                    Pembayaran Uang Bangunan per tahun ajaran 2024
                  </td>
                  <td className="px-4 py-2">15 Maret 2024</td>
                  <td className="px-4 py-2">Rp 600.000,00</td>
                </tr>
              </tbody>
            </table>
            <div className="w-full flex justify-between gap-[5rem] py-3 px-4 mt-3 border-2 border-neutral-300 rounded-2xl">
              <span className="text-black font-bold pl-10">Total</span>
              <span className="w-[10rem] text-black font-bold">
                Rp 2.000.000,00
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

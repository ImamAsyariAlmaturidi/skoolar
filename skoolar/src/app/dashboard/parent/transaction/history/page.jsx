"use client";

import { useState } from "react";
import SideBar from "../../../../../components/parent/Sidebar";
import Link from "next/link";

export default function Pembayaran() {
  const [detail, setDetail] = useState(false);
  return (
    <>
      <div className="w-full h-screen bg-[#f0ecea] flex gap-3 px-5 py-10 ">
        <SideBar className="w-1/4 lg:w-1/5" />
        <div className="w-[90%] bg-white rounded-3xl px-10 py-6">
          <section className="text-black font-semibold bg-white h-[9rem] pt-2 relative">
            <span className="text-3xl">Payments</span>
            <div className="flex gap-6 px-4 py-2 absolute bottom-2 rounded-2xl bg-neutral-100">
              <Link href={"/dashboard/parent/transaction"}>
                <span className="px-3 py-1 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform focus:text-black focus:bg-white">
                  Ongoing Transactions
                </span>
              </Link>
              <span className="px-3 py-1 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform focus:text-black focus:bg-white">
                History
              </span>
            </div>
          </section>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] mt-6 border-collapse">
              <thead className="text-neutral-600 bg-neutral-100 sticky top-0 z-10 rounded-t-2xl border-slate-400 border-b-2">
                <tr className="h-[4rem] mb-10">
                  <th className="px-4 py-2 text-left w-[8%]">
                    Trx ID
                  </th>
                  <th className="px-4 py-2 text-left w-[15%]">Date</th>
                  <th className="px-4 py-2 text-left w-[50%]">Description</th>
                  <th className="px-4 py-2 text-left w-[15%]">Amount</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="text-black text-[15px]">
                <tr className="h-[3rem] border-neutral-300 border-b-2">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">March 13, 2024</td>
                  <td className="px-4 py-2">Payment for March School Fees</td>
                  <td className="px-4 py-2">March 15, 2024</td>
                  <td className="px-4 py-2">Rp 1,400,000.00</td>
                </tr>
                <tr className="h-[3rem] border-neutral-300 border-b-2">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">March 13, 2024</td>
                  <td className="px-4 py-2">
                    Payment for Building Fund for the 2024 Academic Year
                  </td>
                  <td className="px-4 py-2">March 15, 2024</td>
                  <td className="px-4 py-2">Rp 600,000.00</td>
                </tr>
                <tr className="h-[3rem] border-neutral-300 border-b-2">
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">March 13, 2024</td>
                  <td className="px-4 py-2">
                    Payment for Building Fund for the 2024 Academic Year
                  </td>
                  <td className="px-4 py-2">March 15, 2024</td>
                  <td className="px-4 py-2">Rp 600,000.00</td>
                </tr>
                <tr className="h-[3rem] border-neutral-300 border-b-2">
                  <td className="px-4 py-2">4</td>
                  <td className="px-4 py-2">March 13, 2024</td>
                  <td className="px-4 py-2">
                    Payment for Building Fund for the 2024 Academic Year
                  </td>
                  <td className="px-4 py-2">March 15, 2024</td>
                  <td className="px-4 py-2">Rp 600,000.00</td>
                </tr>
                <tr className="h-[3rem] border-neutral-300 border-b-2">
                  <td className="px-4 py-2">5</td>
                  <td className="px-4 py-2">March 13, 2024</td>
                  <td className="px-4 py-2">
                    Payment for Building Fund for the 2024 Academic Year
                  </td>
                  <td className="px-4 py-2">March 15, 2024</td>
                  <td className="px-4 py-2">Rp 600,000.00</td>
                </tr>
              </tbody>
            </table>
            <div className="w-full flex justify-end items-center gap-10  py-3 px-4 mt-3 ">
              <span className="text-black font-bold pl-10">Total</span>
              <span className="w-[10rem] text-black font-bold">
                Rp 2,000,000.00
              </span>
              <button
                onClick={() => setDetail(true)}
                className="px-4 py-1 rounded-2xl bg-black font-bold text-white"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {detail && (
        <div className="h-screen w-full fixed inset-0 z-20 bg-neutral-500 flex justify-center items-center">
          <div className="w-[40rem] h-[40rem] bg-white rounded-2xl">
            <section className="py-3 px-4 flex justify-between">
              <span className="text-3xl text-black font-medium ml-10">
                Payment Detail
              </span>
              <span
                className="text-black cursor-pointer text-2xl"
                onClick={() => setDetail(false)}
              >
                {" "}
                x
              </span>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

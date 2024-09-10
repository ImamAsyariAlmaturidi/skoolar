"use client";

import { useState } from "react";
import SideBar from "../../../../../components/parent/Sidebar";
import Link from "next/link";

export default function Pembayaran() {
  const [detail, setDetail] = useState(false);
  return (
    <>
      <div className="w-full h-screen bg-[#f0f6fe] flex gap-3 px-5 py-10 ">
        <SideBar />
        <div className="w-[90%] h-full overflow-y-auto bg-white rounded-2xl px-10 py-6">
          <section className="text-black font-semibold bg-white h-[9rem] pt-2 relative">
            <span className="text-3xl">Payments</span>
            <div className="flex items-center gap-6 px-4 h-11 absolute bottom-2 rounded-xl bg-neutral-100">
              <Link href={"/dashboard/parent/transaction"}>
                <span className="py-1 px-4 text-neutral-400 rounded-md hover:bg-white hover:text-black transition-transform focus:text-black focus:bg-white">
                  Ongoing Transactions
                </span>
              </Link>
              <Link href={"/dashboard/parent/transaction/history"}>
                <span className="px-3 py-1 text-neutral-400 rounded-md hover:bg-white hover:text-black transition-transform focus:text-black focus:bg-white">
                  History
                </span>
              </Link>
            </div>
          </section>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[300px] mt-6 border-collapse">
              <thead className="text-neutral-600 bg-neutral-100 sticky top-0 z-10 rounded-t-2xl border-slate-400 border-b-2">
                <tr className="h-[4rem] mb-10">
                  <th className="px-4 py-2 text-left w-[8%]">Trx ID</th>
                  <th className="px-4 py-2 text-left w-[15%]">Date</th>
                  <th className="px-4 py-2 text-left w-[40%]">Description</th>
                  <th className="px-4 py-2 text-left w-[15%]">Amount</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Detail</th>
                </tr>
              </thead>
              <tbody className="text-black text-[15px]">
                <tr className="h-[3rem] border-neutral-300 border-b-2">
                  <td className="px-4 py-2">B268134</td>
                  <td className="px-4 py-2">March 13, 2024</td>
                  <td className="px-4 py-2">Payment for March School Fees</td>
                  <td className="px-4 py-2"> Rp 1,400,000.00</td>
                  <td className="px-4 py-2">
                    <button className="p-3 text-green-500 text-[1rem] font-semibold">
                      Paid
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => setDetail(true)}
                      className="px-6 py-2 border-2 rounded-2xl bg-black text-white"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {detail && (
        <div className="h-screen w-full fixed inset-0 z-20 bg-neutral-500 backdrop-blur-sm bg-opacity-20 flex justify-center items-center overflow-y-auto overflow-x-hidden">
          <div className="w-[35rem] h-[40rem] bg-white rounded-2xl">
            <section className="px-5 h-[11%] w-full flex justify-between items-center">
              <span className="text-2xl text-neutral-600">Payment Detail</span>{" "}
              <span
                onClick={() => {
                  setDetail(false);
                }}
                className="text-2xl text-neutral-600 cursor-pointer hover:text-red-700"
              >
                x
              </span>
            </section>
            <div className="h-[80%] w-full py-3 px-5 overflow-y-auto overflow-x-hidden">
              <span className="text-neutral-700 text-[1rem]">
                Dear Parents,
              </span>
              <p className="mt-2 text-neutral-700 leading-normal text-[13px] w-full px-2">
                Thank you for your cooperation. Your support helps ensure that
                we can continue to provide a high-quality education for our
                students
              </p>
              <p className="mt-2 text-neutral-700 leading-normal text-[13px] px-2">
                For your records, here are the transaction details:
              </p>
              <div className="w-full h-auto mt-3 border-[1px] border-neutral-300 rounded-2xl px-10 py-5 overflow-y-auto overflow-x-hidden">
                <section className="flex items-center justify-between gap-20 my-2 text-[14px]">
                  <span className="text-black font-semibold">
                    Payment Status
                  </span>
                  <span className="text-green-500">Paid</span>
                </section>
                <section className="flex items-center justify-between gap-20 my-2 text-[14px]">
                  <span className="text-black font-semibold">
                    Transaction ID
                  </span>
                  <span className="text-green-500">bg23456</span>
                </section>
                <section className="flex items-center justify-between gap-x-20 my-2 text-[14px]">
                  <span className="text-black font-semibold">Payment date</span>
                  <span className="text-green-500">
                    13/02/2024 , 09:02 WIB{" "}
                  </span>
                </section>
                <div className="w-full overflow-y-auto overflow-x-hidden h-auto mt-6">
                  <span className="text-black font-semibold text-[14px]">
                    Transaction Detail :
                  </span>
                  <div className="overflow-x-hidden overflow-y-auto mt-3">
                    <table className="w-full min-w-[300px] border-collapse overflow-x-hidden overflow-y-auto">
                      <thead className="text-neutral-600 bg-neutral-100 rounded-t-2xl border-slate-400 border-b-2">
                        <tr className="h-[2rem] mb-10">
                          <th className="px-4 py-2 text-left w-[40%]">
                            Description
                          </th>
                          <th className="px-4 py-2 text-left w-[15%]">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-black text-[15px]">
                        <tr className="h-[3rem] border-neutral-300 border-b-2">
                          <td className="px-4 py-2">
                            Payment for March School Fees
                          </td>
                          <td className="px-4 py-2"> Rp 1,400,000.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="w-full flex justify-end items-center gap-10 py-3">
                      <span className="text-black font-bold pl-10">Total</span>
                      <span className="w-[10rem] text-black font-bold">
                        {/* {formatCurrency(totalAmount)} */}
                        Rp.1.400.000,00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-neutral-700 leading-normal text-[13px] w-full px-2">
                Thank you for your cooperation. Your support helps ensure that
                we can continue to provide a high-quality education for our
                students.
              </p>
              <section className="mt-3 text-neutral-700 leading-normal text-[13px] w-full flex flex-col items-end px-10 right-0">
                <p className="">Warm regards,</p>
                <p>School Boards</p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

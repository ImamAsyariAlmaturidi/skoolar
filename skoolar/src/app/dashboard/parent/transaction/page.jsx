"use client";

import { useEffect, useState } from "react";
import SideBar from "../../../../components/parent/Sidebar";
import Link from "next/link";

import { getTransactions } from "./action";
import Swal from "sweetalert2";
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};
export default function Pembayaran() {
  const [dataTransaction, setDataTransaction] = useState([]);
  const [totalAmount, setTotalAmount] = useState("");

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.CLIENT_KEY_MIDTRANS;

    const script = document.createElement("script");
    script.src = snapScript;

    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const checkout = async (description, amount, dueDate) => {
    const data = {
      description,
      amount,
      dueDate,
    };
    try {
      const response = await fetch("/api/transaction", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const requestData = await response.json();
      window.snap.pay(requestData.token, {
        onSuccess: async function () {
          const response = await fetch(
            `http://localhost:3000/api/transaction`,
            {
              method: "POST",
              body: JSON.stringify(data),
            }
          );

          Swal.fire({
            icon: "success",
            title: response.data.message,
          });
        },
        onPending: function () {
          Swal.fire({
            icon: "warning",
            title: "Waiting for your payment!",
          });
        },
        onError: function () {
          Swal.fire({
            icon: "error",
            title: "Payment failed!",
          });
        },
        onClose: function () {
          Swal.fire({
            icon: "question",
            title: "Cancel payment?",
          });
        },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error,
      });
    }
  };

  async function getTransaction() {
    try {
      const { data } = await getTransactions();

      const unpaidTransactions =
        data?.filter((transaction) => transaction.status === "unpaid") || [];

      console.log(unpaidTransactions);

      const total = unpaidTransactions.reduce(
        (sum, transaction) => sum + transaction.amount,
        0
      );

      setDataTransaction(unpaidTransactions);
      setTotalAmount(total);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-[#f0ecea] flex gap-3 px-5 py-10 ">
        <SideBar className="w-1/4 lg:w-1/5" />
        <div className="w-[90%] bg-white rounded-3xl px-10 py-6">
          <section className="text-black font-semibold bg-white h-[9rem] pt-2 relative">
            <span className="text-3xl">Payments</span>
            <div className="flex gap-6 px-4 py-2 absolute bottom-2 rounded-2xl bg-neutral-100">
              <span className="px-3 py-1 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform focus:text-black focus:bg-white">
                Ongoing Transactions
              </span>
              <Link href={"/dashboard/parent/transaction/history"}>
                <span className="px-3 py-1 text-neutral-400 rounded-2xl hover:bg-white hover:text-black transition-transform focus:text-black focus:bg-white">
                  History
                </span>
              </Link>
            </div>
          </section>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] mt-6 border-collapse">
              <thead className="text-neutral-600 bg-neutral-100 sticky top-0 z-10 rounded-t-2xl border-slate-400 border-b-2">
                <tr className="h-[4rem] mb-10">
                  <th className="px-4 py-2 text-left w-[5%]">No</th>
                  <th className="px-4 py-2 text-left w-[15%]">Date</th>
                  <th className="px-4 py-2 text-left w-[50%]">Description</th>
                  <th className="px-4 py-2 text-left w-[15%]">Due Date</th>
                  <th className="px-4 py-2 text-left">Amount</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="text-black text-[15px]">
                {dataTransaction?.map((transaction, index) => (
                  <tr
                    key={transaction._id}
                    className="h-[3rem] border-neutral-300 border-b-2"
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{transaction.createdAt}</td>
                    <td className="px-4 py-2">{transaction.description}</td>
                    <td className="px-4 py-2">{transaction.dueDate}</td>
                    <td className="px-4 py-2"> Rp.{totalAmount}</td>
                    <td className="text-red-500 px-4 py-2">
                      {transaction.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-full flex justify-end items-center gap-10 py-3 px-4 mt-3">
              <span className="text-black font-bold pl-10">Total</span>
              <span className="w-[10rem] text-black font-bold">
                {/* {formatCurrency(totalAmount)} */}
                Rp.{totalAmount}
              </span>
              <button
                onClick={() => checkout("payment", totalAmount, new Date())}
                className="px-4 py-1 rounded-2xl bg-black font-bold text-white"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

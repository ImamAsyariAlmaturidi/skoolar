"use client"

import { useState } from "react";

export default function addUser() {
    const [products, setProducts] = useState([
        {
            name: "6A",
            teacher: "Ms Lita",
            member: "12",
        },
        {
            name: "5A",
            teacher: "Ms Rina",
            member: "12",
        },
        {
            name: "4C",
            teacher: "Mr Fathan",
            member: "12",
        },
    ]);
    return (
        <>
            <div className="px-10">
                <p className="pt-10">
                    Group Management
                </p>
                <div className="w-full  h-[30rem] bg-white border border-neutral-300 rounded-xl mt-5 p-5">
                    <div className="flex justify-between">
                        <p className="text-2xl font-semibold">Groups</p>
                        <button className="text-xs bg-neutral-800 p-2 rounded-md text-white">New Group</button>
                    </div>
                    <p className="mt-1 text-sm">Manage your groups and view their members.</p>
                    <div className="relative mt-5 overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className=" py-3">
                                        Group Name
                                    </th>
                                    <th scope="col" className=" py-3">
                                        Teacher
                                    </th>
                                    <th scope="col" className=" py-3">
                                        Member
                                    </th>
                                    <th scope="col" className=" py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Step 2: Looping data produk menggunakan map */}
                                {products.map((product, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {product.name}
                                        </th>
                                        <td className=" py-4">{product.teacher}</td>
                                        <td className=" py-4">{product.member}</td>
                                        <td className=" py-4"><button className="bg-neutral-800 p-2 px-3 text-xs text-white rounded-md">Edit</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}
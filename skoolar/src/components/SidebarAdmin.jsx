"use client";

import Link from "next/link";
import { doLogout } from "../app/login/action";
export default function SideBar() {
  return (
    <>
      <div className="w-full max-w-[7rem] h-full rounded-3xl bg-white shadow-xl flex flex-col items-center justify-center">
        <div className="w-full h-[55%] flex justify-center items-center ">
          <ul className="text-black space-y-6 flex flex-col items-center">
            <li>
              <Link href="/dashboard/admin/">
                <figure className="w-[3.3rem] h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1  cursor-pointer  hover:text-white">
                  <svg
                    width="37px"
                    height="37px"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M51.61,25.21,33.2,11.4a2,2,0,0,0-2.4,0L12.39,25.21a2,2,0,0,0-.8,1.6V53.45a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V45a2,2,0,0,1,2-2h7a2,2,0,0,1,2,2v8.45a2,2,0,0,0,2,2H50.41a2,2,0,0,0,2-2V26.81A2,2,0,0,0,51.61,25.21Z"></path>
                    </g>
                  </svg>
                </figure>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/admin/add-user">
                <figure className="w-[3.3rem] text-neutral-800 h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1 hover:text-white cursor-pointer">
                  <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M9 12H15M12 9V15M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
                        stroke="currentColor"
                        strokeWidth="1.536"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </figure>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/admin/list-user">
                <figure className="w-[3.3rem] h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1 hover:text-white cursor-pointer">
                  <svg
                    fill="none"
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    id="add-user-left-6"
                    data-name="Line Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon line-color"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        id="secondary"
                        d="M7,5H3M5,7V3"
                        style={{
                          fill: "none",
                          stroke: "currentColor", // Menggunakan currentColor
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "1.44",
                        }}
                      />
                      <path
                        id="primary"
                        d="M11,3.41A5.11,5.11,0,0,1,13,3a5,5,0,1,1-4.59,7"
                        style={{
                          fill: "none",
                          stroke: "currentColor", // Menggunakan currentColor
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "1.44",
                        }}
                      />
                      <path
                        id="primary-2"
                        data-name="primary"
                        d="M12,13h2a7,7,0,0,1,7,7v0a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1v0A7,7,0,0,1,12,13Z"
                        style={{
                          fill: "none",
                          stroke: "currentColor", // Menggunakan currentColor
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "1.44",
                        }}
                      />
                    </g>
                  </svg>
                </figure>
              </Link>
            </li>
            <li>
              <Link href={"/dashboard/admin/chat"}>
                <figure className="w-[3.3rem] h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1 cursor-pointer hover:text-white">
                  <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <g id="Communication / Chat_Conversation">
                        <path
                          id="Vector"
                          d="M16 8H20C20.5523 8 21 8.44772 21 9V20L17.667 17.231C17.4875 17.0818 17.2608 17 17.0273 17H9C8.44771 17 8 16.5523 8 16V13M16 8V5C16 4.44772 15.5523 4 15 4H4C3.44772 4 3 4.44772 3 5V16.0003L6.33301 13.2308C6.51255 13.0817 6.73924 13 6.97266 13H8M16 8V12C16 12.5523 15.5523 13 15 13H8"
                          stroke="currentColor" // Menggunakan currentColor untuk mengikuti warna hover
                          strokeWidth="1.448"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </svg>
                </figure>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/admin/transaction">
                <figure className="w-[3.3rem] h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1 cursor-pointer text-black hover:text-white">
                  <svg
                    width="36px"
                    height="36px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M18 8V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V8M21 12H19C17.8954 12 17 12.8954 17 14C17 15.1046 17.8954 16 19 16H21M3 8V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H3Z"
                        stroke="currentColor" // Ubah ke currentColor
                        strokeWidth="1.368"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </figure>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full h-[25%] flex justify-center items-center pt-10 ">
          <ul className="text-black space-y-7 flex flex-col items-center">
            <li>
              <figure className="w-[3rem] h-[3rem] rounded-full bg-white flex justify-center items-center hover:translate-x-2 transition-transform hover:bg-blue-100 hover:border-2 border-slate-300 cursor-pointer">
                <img
                  className="w-[75%] h-[75%] object-contain"
                  src="https://icons.veryicon.com/png/o/internet--web/iview-3-x-icons/ios-log-out.png"
                  alt="Icon"
                />
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

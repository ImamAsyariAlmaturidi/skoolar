"use client";

import Link from "next/link";
import { doLogout } from "../app/login/action";
export default function SideBar() {
  return (
    <>
      <div className="w-full flex flex-col max-w-[7rem] h-full rounded-3xl bg-white shadow-xl py-5">
        <div className="w-full h-full flex justify-evenly items-center overflow-y-auto overflow-x-hidden ">
          <ul className="text-black flex flex-col items-center gap-y-10">
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
              <Link href={"/dashboard/admin/announcement"}>
                <figure className="w-[3.3rem] h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1 cursor-pointer hover:text-white">
                  <svg
                    fill="#000000"
                    className="fill-current text-black hover:text-white"s
                    width="34px"
                    height="64px"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M1587.162 31.278c11.52-23.491 37.27-35.689 63.473-29.816 25.525 6.099 43.483 28.8 43.483 55.002V570.46C1822.87 596.662 1920 710.733 1920 847.053c0 136.32-97.13 250.503-225.882 276.705v513.883c0 26.202-17.958 49.016-43.483 55.002a57.279 57.279 0 0 1-12.988 1.468c-21.12 0-40.772-11.745-50.485-31.171C1379.238 1247.203 964.18 1242.347 960 1242.347H564.706v564.706h87.755c-11.859-90.127-17.506-247.003 63.473-350.683 52.405-67.087 129.657-101.082 229.948-101.082v112.941c-64.49 0-110.57 18.861-140.837 57.487-68.781 87.868-45.064 263.83-30.269 324.254 4.18 16.828.34 34.673-10.277 48.34-10.73 13.665-27.219 21.684-44.499 21.684H508.235c-31.171 0-56.47-25.186-56.47-56.47v-621.177h-56.47c-155.747 0-282.354-126.607-282.354-282.353v-56.47h-56.47C25.299 903.523 0 878.336 0 847.052c0-31.172 25.299-56.471 56.47-56.471h56.471v-56.47c0-155.634 126.607-282.354 282.353-282.354h564.593c16.941-.112 420.48-7.002 627.275-420.48Zm-5.986 218.429c-194.71 242.371-452.216 298.164-564.705 311.04v572.724c112.489 12.876 369.995 68.556 564.705 311.04ZM903.53 564.7H395.294c-93.402 0-169.412 76.01-169.412 169.411v225.883c0 93.402 76.01 169.412 169.412 169.412H903.53V564.7Zm790.589 123.444v317.93c65.618-23.379 112.94-85.497 112.94-159.021 0-73.525-47.322-135.53-112.94-158.909Z"
                        fillRule="evenodd"
                      />{" "}
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
            <li>
              <button onClick={() => doLogout()}>
                <figure className="w-[3.3rem] h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1 cursor-pointer hover:text-white">
                  <svg
                    width="40px"
                    height="40px"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-colors duration-300"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <title>ionicons-v5-o</title>
                      <path
                        d="M304,336v40a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V136a40,40,0,0,1,40-40H256c22.09,0,48,17.91,48,40v40"
                        style={{
                          fill: "none",
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 32,
                        }}
                      />
                      <polyline
                        points="368 336 448 256 368 176"
                        style={{
                          fill: "none",
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 32,
                        }}
                      />
                      <line
                        x1={176}
                        y1={256}
                        x2={432}
                        y2={256}
                        style={{
                          fill: "none",
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 32,
                        }}
                      />
                    </g>
                  </svg>
                </figure>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

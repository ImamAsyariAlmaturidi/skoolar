"use client";
import Link from "next/link";
import { doLogout } from "../../app/login/action";
export default function TeacherSideBar() {
  return (
    <>
      {" "}
      <div className="w-full flex flex-col max-w-[7rem] h-full rounded-3xl bg-white shadow-xl py-5">
        <div className="w-full h-full flex justify-evenly items-center overflow-y-auto overflow-x-hidden ">
          <ul className="text-black flex flex-col items-center gap-y-10 mt-10">
            <li>
              <Link href="/dashboard/teacher">
                <figure className="lg:w-[3.3rem] lg:h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1 cursor-pointer hover:text-white">
                  <svg
                    width="35px"
                    height="35px"
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
              <Link href="/dashboard/teacher/chat">
                <figure className="w-[3.3rem] h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1 cursor-pointer  hover:text-white">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  >
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                      <path
                        d="M21.331 10.669v-7.997h-18.659v14.394h7.997v7.997h11.063l4.265 4.264h0.665v-4.264h2.666v-14.394h-7.997zM3.738 16v-12.262h16.527v6.931h-9.596v5.331h-6.931zM28.262 23.997h-2.666v3.422l-3.423-3.422h-10.439v-12.262h16.527v12.262z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </figure>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/teacher/assignment">
                <figure className="w-[3.3rem] h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1 cursor-pointer  hover:text-white">
                  <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 28 28"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path
                      d="M4 5.25C4 3.45508 5.45507 2 7.25 2H20.75C22.5449 2 24 3.45507 24 5.25V17.3787C23.8796 17.4592 23.7653 17.5527 23.659 17.659L22.5 18.818V5.25C22.5 4.2835 21.7165 3.5 20.75 3.5H7.25C6.2835 3.5 5.5 4.2835 5.5 5.25V22.7497C5.5 23.7162 6.2835 24.4997 7.25 24.4997H15.3177L16.8177 25.9997H7.25C5.45507 25.9997 4 24.5446 4 22.7497V5.25Z"
                      strokeWidth="0.1"
                    ></path>
                    <path
                      d="M10.5 8.75C10.5 9.44036 9.94036 10 9.25 10C8.55964 10 8 9.44036 8 8.75C8 8.05964 8.55964 7.5 9.25 7.5C9.94036 7.5 10.5 8.05964 10.5 8.75Z"
                      strokeWidth="0.1"
                    ></path>
                    <path
                      d="M9.25 15.2498C9.94036 15.2498 10.5 14.6902 10.5 13.9998C10.5 13.3095 9.94036 12.7498 9.25 12.7498C8.55964 12.7498 8 13.3095 8 13.9998C8 14.6902 8.55964 15.2498 9.25 15.2498Z"
                      strokeWidth="0.1"
                    ></path>
                    <path
                      d="M9.25 20.5C9.94036 20.5 10.5 19.9404 10.5 19.25C10.5 18.5596 9.94036 18 9.25 18C8.55964 18 8 18.5596 8 19.25C8 19.9404 8.55964 20.5 9.25 20.5Z"
                      strokeWidth="0.1"
                    ></path>
                    <path
                      d="M12.75 8C12.3358 8 12 8.33579 12 8.75C12 9.16421 12.3358 9.5 12.75 9.5H19.25C19.6642 9.5 20 9.16421 20 8.75C20 8.33579 19.6642 8 19.25 8H12.75Z"
                      strokeWidth="0.1"
                    ></path>
                    <path
                      d="M12 13.9998C12 13.5856 12.3358 13.2498 12.75 13.2498H19.25C19.6642 13.2498 20 13.5856 20 13.9998C20 14.414 19.6642 14.7498 19.25 14.7498H12.75C12.3358 14.7498 12 14.414 12 13.9998Z"
                      strokeWidth="0.1"
                    ></path>
                    <path
                      d="M12.75 18.5C12.3358 18.5 12 18.8358 12 19.25C12 19.6642 12.3358 20 12.75 20H19.25C19.6642 20 20 19.6642 20 19.25C20 18.8358 19.6642 18.5 19.25 18.5H12.75Z"
                      strokeWidth="0.1"
                    ></path>
                    <path
                      d="M25.7803 19.7803L19.7803 25.7803C19.6397 25.921 19.4489 26 19.25 26C19.0511 26 18.8603 25.921 18.7197 25.7803L15.7216 22.7823C15.4287 22.4894 15.4287 22.0145 15.7216 21.7216C16.0145 21.4287 16.4894 21.4287 16.7823 21.7216L19.25 24.1893L24.7197 18.7197C25.0126 18.4268 25.4874 18.4268 25.7803 18.7197C26.0732 19.0126 26.0732 19.4874 25.7803 19.7803Z"
                      strokeWidth="0.1"
                    ></path>
                  </svg>
                </figure>
              </Link>
            </li>

            <li>
              <Link href="/dashboard/teacher/announcement">
                <figure className="w-[3.3rem] h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1 cursor-pointer hover:text-white">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
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
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.512"
                        d="M11,15 C14,15 19,19 19,19 L19,3 C19,3 14,7 11,7 C11,7 11,15 11,15 Z M5,15 L8,23 L12,23 L9,15 M19,14 C20.657,14 22,12.657 22,11 C22,9.343 20.657,8 19,8 M11,19 C11.9999997,18.9999994 14,18 14,16 M2,11 C2,7.88888889 3.7912,7 6,7 L11,7 L11,15 L6,15 C3.7912,15 2,14.1111111 2,11 Z"
                      />{" "}
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

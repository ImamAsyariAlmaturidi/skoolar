"use client";

import Link from "next/link";

export default function SideBar() {
  return (
    <>
      <div className="w-full max-w-[7rem] h-full rounded-3xl bg-white shadow-xl py-5">
        <div className="w-full h-[20%] py-5 flex justify-center">
          <figure className="w-[5rem] h-[5rem] rounded-full bg-[#006bf8] flex justify-center items-center cursor-pointer">
            <img
              className="w-[90%] h-[90%] object-cover rounded-full border-2 border-white"
              src="https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg"
              alt="Profile"
            />
          </figure>
        </div>
        <div className="w-full h-[55%] flex justify-center items-center border-t-2 border-neutral-300">
          <ul className="text-black space-y-6 flex flex-col items-center">
            <li>
              <Link href="/dashboard/parent">
                <figure className="w-[3.3rem] h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1  cursor-pointer  hover:text-white">
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
              <Link href="/dashboard/parent/chat">
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
              <Link href="/dashboard/parent/assignment">
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
              <figure className="w-[3.3rem] h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1 hover:text-white cursor-pointer">
                <svg
                  width="36px"
                  height="36px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="1.3"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g clipPath="url(#clip0_15_159)">
                      <rect width="24" height="24"></rect>
                      <path
                        d="M9.5 19C8.89555 19 7.01237 19 5.61714 19C4.87375 19 4.39116 18.2177 4.72361 17.5528L5.57771 15.8446C5.85542 15.2892 6 14.6774 6 14.0564C6 13.2867 6 12.1434 6 11C6 9 7 5 12 5C17 5 18 9 18 11C18 12.1434 18 13.2867 18 14.0564C18 14.6774 18.1446 15.2892 18.4223 15.8446L19.2764 17.5528C19.6088 18.2177 19.1253 19 18.382 19H14.5M9.5 19C9.5 21 10.5 22 12 22C13.5 22 14.5 21 14.5 19M9.5 19C11.0621 19 14.5 19 14.5 19"
                        stroke="currentColor"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 5V3"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_15_159">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </figure>
            </li>
            <li>
              <Link href="/dashboard/parent/transaction">
                <figure className="w-[3.3rem] h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1  cursor-pointer text-black hover:text-white">
                  <svg
                    fill="currentColor"
                    width="30px"
                    height="30px"
                    viewBox="0 -2.5 46 46"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        id="_07.Wallet"
                        dataname="07.Wallet"
                        d="M47,40h0a5,5,0,0,1-5,5H6a5,5,0,0,1-5-5V11A4,4,0,0,1,5,7H25.171l8.1-2.934a.99.99,0,0,1,1.268.589L35.391,7H39a4,4,0,0,1,4,4v2h0a4,4,0,0,1,4,4ZM5,9H5a2,2,0,0,0,0,4H8.634c.013-.005.021-.016.034-.021L19.65,9Zm29.078.181L33.016,6.257h0L30.964,7h0L25.453,9h-.01L14.4,13H35.466ZM41,11a2,2,0,0,0-2-2H36.117l1.454,4H41Zm2,4H5a3.955,3.955,0,0,1-2-.555V40a3,3,0,0,0,3,3H42a3,3,0,0,0,3-3V33H41a4,4,0,0,1,0-8h4V17A2,2,0,0,0,43,15Zm2,16V27H41a2,2,0,0,0,0,4Zm-4-3h2v2H41Z"
                        transform="translate(-1 -4.006)"
                        fillRule="evenodd"
                      ></path>{" "}
                    </g>
                  </svg>
                </figure>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full h-[25%] flex justify-center items-center pt-10 border-t-2 border-neutral-300">
          <ul className="text-black space-y-7 flex flex-col items-center">
            <li>
              <figure className="w-[3.3rem] h-[3.3rem] rounded-full bg-white flex justify-center items-center hover:bg-[#006bf8] transition-transform hover:translate-x-1 cursor-pointer text-black hover:text-white">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 1920 1920"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors duration-300"
                  fill="currentColor"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="m1739.34 1293.414-105.827 180.818-240.225-80.188-24.509 22.25c-69.91 63.586-150.211 109.666-238.644 136.771l-32.076 9.94-49.468 244.065H835.584l-49.468-244.179-32.076-9.939c-88.432-27.105-168.734-73.185-238.644-136.771l-24.508-22.25-240.226 80.189-105.826-180.82 189.74-164.442-7.453-32.978c-10.39-45.742-15.586-91.483-15.586-135.869 0-44.386 5.195-90.127 15.586-135.868l7.454-32.979-189.741-164.442 105.826-180.819 240.226 80.075 24.508-22.25c69.91-63.585 150.212-109.665 238.644-136.884l32.076-9.826 49.468-244.066h213.007l49.468 244.18 32.076 9.825c88.433 27.219 168.734 73.186 238.644 136.885l24.509 22.25 240.225-80.189 105.826 180.819-189.74 164.442 7.453 32.98c10.39 45.74 15.586 91.481 15.586 135.867 0 44.386-5.195 90.127-15.586 135.869l-7.454 32.978 189.741 164.556Zm-53.76-333.403c0-41.788-3.84-84.48-11.634-127.284l210.184-182.062-199.454-340.856-265.186 88.433c-66.974-55.567-143.322-99.388-223.85-128.414L1140.977.01H743.198l-54.663 269.704c-81.431 29.139-156.424 72.282-223.963 128.414L199.5 309.809.045 650.665l210.07 182.062c-7.68 42.804-11.52 85.496-11.52 127.284 0 41.789 3.84 84.48 11.52 127.172L.046 1269.357 199.5 1610.214l265.186-88.546c66.974 55.68 143.323 99.388 223.85 128.527l54.663 269.816h397.779l54.663-269.703c81.318-29.252 156.424-72.283 223.85-128.527l265.186 88.546 199.454-340.857-210.184-182.174c7.793-42.805 11.633-85.496 11.633-127.285ZM942.075 564.706C724.1 564.706 546.782 742.024 546.782 960c0 217.976 177.318 395.294 395.294 395.294 217.977 0 395.294-177.318 395.294-395.294 0-217.976-177.317-395.294-395.294-395.294m0 677.647c-155.633 0-282.353-126.72-282.353-282.353s126.72-282.353 282.353-282.353S1224.43 804.367 1224.43 960s-126.72 282.353-282.353 282.353"
                      fillRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </figure>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

"use client";
import { useState } from "react";
import SideBar from "../../../../components/parent/Sidebar";
import Link from "next/link";

export default function ParentAnnouncement() {
  const [announcement, setAnnouncement] = useState([
    {
      id: "1",
      title: "Christmas Celebration",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium nam suscipit? Numquam doloribus dolorum harum commodi, veniam porro facilis corporis mollitia rem, voluptatem tempora ex earum quidem sapiente modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque quisquam eveniet vero magni harum quos doloremque labore inventore rem veritatis, rerum aut reprehenderit tenetur aperiam, hic ex, eos laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste nesciunt repellendus nobis! Consequuntur natus quibusdam error. Maxime exercitationem tempora harum dolorem itaque omnis. Sint rerum facere suscipit. Labore, sequi",
    },
    {
      id: "2",
      title: "School Crnival",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium nam suscipit? Numquam doloribus dolorum harum commodi, veniam porro facilis corporis mollitia rem, voluptatem tempora ex earum quidem sapiente modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque quisquam eveniet vero magni harum quos doloremque labore inventore rem veritatis, rerum aut reprehenderit tenetur aperiam, hic ex, eos laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste nesciunt repellendus nobis! Consequuntur natus quibusdam error. Maxime exercitationem tempora harum dolorem itaque omnis. Sint rerum facere suscipit. Labore, sequi",
    },
    {
      id: "3",
      title: "Christmas Celebration",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium nam suscipit? Numquam doloribus dolorum harum commodi, veniam porro facilis corporis mollitia rem, voluptatem tempora ex earum quidem sapiente modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque quisquam eveniet vero magni harum quos doloremque labore inventore rem veritatis, rerum aut reprehenderit tenetur aperiam, hic ex, eos laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste nesciunt repellendus nobis! Consequuntur natus quibusdam error. Maxime exercitationem tempora harum dolorem itaque omnis. Sint rerum facere suscipit. Labore, sequi",
    },
    {
      id: "4",
      title: "Christmas Celebration",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium nam suscipit? Numquam doloribus dolorum harum commodi, veniam porro facilis corporis mollitia rem, voluptatem tempora ex earum quidem sapiente modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque quisquam eveniet vero magni harum quos doloremque labore inventore rem veritatis, rerum aut reprehenderit tenetur aperiam, hic ex, eos laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste nesciunt repellendus nobis! Consequuntur natus quibusdam error. Maxime exercitationem tempora harum dolorem itaque omnis. Sint rerum facere suscipit. Labore, sequi",
    },
    {
      id: "4",
      title: "Christmas Celebration",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium nam suscipit? Numquam doloribus dolorum harum commodi, veniam porro facilis corporis mollitia rem, voluptatem tempora ex earum quidem sapiente modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque quisquam eveniet vero magni harum quos doloremque labore inventore rem veritatis, rerum aut reprehenderit tenetur aperiam, hic ex, eos laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste nesciunt repellendus nobis! Consequuntur natus quibusdam error. Maxime exercitationem tempora harum dolorem itaque omnis. Sint rerum facere suscipit. Labore, sequi",
    },
  ]);
  return (
    <>
      <div className="w-full flex gap-3 px-5 py-10 h-screen bg-[#F1F7FE]">
        <SideBar />
        <div className="flex w-full">
          <div className=" bg-white w-[30rem] h-full border-r border-neutral-200 rounded-2xl rounded-tr-none rounded-br-none">
            <header className="flex items-center p-3 pb-4  gap-3 h-[11%]  text-[#006bf8] border-b border-neutral-300 ">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#006bf8"
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
                    stroke="#006bf8"
                    strokeWidth="1.512"
                    d="M11,15 C14,15 19,19 19,19 L19,3 C19,3 14,7 11,7 C11,7 11,15 11,15 Z M5,15 L8,23 L12,23 L9,15 M19,14 C20.657,14 22,12.657 22,11 C22,9.343 20.657,8 19,8 M11,19 C11.9999997,18.9999994 14,18 14,16 M2,11 C2,7.88888889 3.7912,7 6,7 L11,7 L11,15 L6,15 C3.7912,15 2,14.1111111 2,11 Z"
                  />{" "}
                </g>
              </svg>
              <span className="text-2xl text-black font-medium lg:text-nowrap">
                School Announcemennt
              </span>
            </header>
            <div className="h-[86%] w-full mt-5 overflow-y-auto px-4">
              <div className="flex flex-col gap-4 ">
                {announcement.map((el, index) => (
                  <Link href={`/dashboard/parent/announcement/${el.title}`}>
                    <div className="flex justify-start items- gap-3 w-full h-[5rem] border-neutral-200 border-b-[0.3px]">
                      <section className="h-full flex items-start py-2">
                        <section className="w-4 h-4 rounded-full bg-blue-400"></section>
                      </section>
                      <section className="overflow-hidden relative mr-2">
                        <span className="text-black text-[15px] font-medium">
                          Finance
                        </span>{" "}
                        <span className="text-[#006bf8] text-[12px] absolute right-3">
                          17.30
                        </span>
                        <p className="text-neutral-600 text-[12px] line-clamp-2 mt-1 leading-normal">
                          Dear Mr. Fathan, we respectfully inform you that the
                          payment is overdue by 3 months...
                        </p>
                      </section>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full bg-white ml-0 rounded-2xl rounded-l-none">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-3xl font-bold text-neutral-300">
                Open Announcement
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

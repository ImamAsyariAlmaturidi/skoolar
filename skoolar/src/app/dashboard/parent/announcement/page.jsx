"use client";
import { useState } from "react";
import SideBar from "../../../../components/parent/Sidebar";

export default function ParentAnnouncement() {
  const [announcement, setAnnouncement] = useState([
    {
      id: "1",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium nam suscipit? Numquam doloribus dolorum harum commodi, veniam porro facilis corporis mollitia rem, voluptatem tempora ex earum quidem sapiente modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque quisquam eveniet vero magni harum quos doloremque labore inventore rem veritatis, rerum aut reprehenderit tenetur aperiam, hic ex, eos laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste nesciunt repellendus nobis! Consequuntur natus quibusdam error. Maxime exercitationem tempora harum dolorem itaque omnis. Sint rerum facere suscipit. Labore, sequi",
    },
    {
      id: "2",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium nam suscipit? Numquam doloribus dolorum harum commodi, veniam porro facilis corporis mollitia rem, voluptatem tempora ex earum quidem sapiente modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque quisquam eveniet vero magni harum quos doloremque labore inventore rem veritatis, rerum aut reprehenderit tenetur aperiam, hic ex, eos laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste nesciunt repellendus nobis! Consequuntur natus quibusdam error. Maxime exercitationem tempora harum dolorem itaque omnis. Sint rerum facere suscipit. Labore, sequi",
    },
    {
      id: "3",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium nam suscipit? Numquam doloribus dolorum harum commodi, veniam porro facilis corporis mollitia rem, voluptatem tempora ex earum quidem sapiente modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque quisquam eveniet vero magni harum quos doloremque labore inventore rem veritatis, rerum aut reprehenderit tenetur aperiam, hic ex, eos laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste nesciunt repellendus nobis! Consequuntur natus quibusdam error. Maxime exercitationem tempora harum dolorem itaque omnis. Sint rerum facere suscipit. Labore, sequi",
    },
    {
      id: "4",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium nam suscipit? Numquam doloribus dolorum harum commodi, veniam porro facilis corporis mollitia rem, voluptatem tempora ex earum quidem sapiente modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque quisquam eveniet vero magni harum quos doloremque labore inventore rem veritatis, rerum aut reprehenderit tenetur aperiam, hic ex, eos laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste nesciunt repellendus nobis! Consequuntur natus quibusdam error. Maxime exercitationem tempora harum dolorem itaque omnis. Sint rerum facere suscipit. Labore, sequi",
    },
    {
      id: "4",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium nam suscipit? Numquam doloribus dolorum harum commodi, veniam porro facilis corporis mollitia rem, voluptatem tempora ex earum quidem sapiente modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque quisquam eveniet vero magni harum quos doloremque labore inventore rem veritatis, rerum aut reprehenderit tenetur aperiam, hic ex, eos laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste nesciunt repellendus nobis! Consequuntur natus quibusdam error. Maxime exercitationem tempora harum dolorem itaque omnis. Sint rerum facere suscipit. Labore, sequi",
    },
  ]);
  return (
    <>
      <div className="w-full flex gap-3 px-5 py-10 h-screen bg-[#f0f6fe]">
        <SideBar />
      </div>
    </>
  );
}

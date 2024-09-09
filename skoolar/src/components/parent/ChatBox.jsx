
"use client";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { format } from "date-fns"; 

export default function ChatBox({ data }) {
  const [latestMessage, setLatestMessage] = useState(null);

  useEffect(() => {
    if (!data?._id) return;

    const messagesRef = collection(db, "chats");
    const q = query(
      messagesRef,
      where("group_id", "==", data._id),
      orderBy("last_timestamp", "desc") 
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const formattedMessages = messagesData.map((doc) => ({
        id: doc.last_timestamp.toDate(), 
        text: doc.last_text,
        sender: doc.last_sender_name,
      }));

      setLatestMessage(formattedMessages[0] || null); 
    });

    return () => unsubscribe();
  }, [data?._id]);

  
  const formattedTime = latestMessage
    ? format(new Date(latestMessage.id), "HH:mm")
    : "";

  return (
    <div className="pl-8 pt-2 pb-2 flex hover:bg-neutral-200 cursor-pointer">
      <div className="rounded-full bg-orange-200 border border-neutral-200 w-14 h-11 flex items-center justify-center">
        <img
          className="h-7"
          src="https://www.iconpacks.net/icons/2/free-apple-icon-2327-thumb.png"
          alt="Chat icon"
        />
      </div>
      <div className="w-full mr-4">
        <div className="flex justify-between w-full mb-4">
          <p className="ml-4 font-semibold text-[0.9rem] text-neutral-700">
            {data?.name}
          </p>
          <p className="text-neutral-500 text-[0.8rem]">{formattedTime}</p>
        </div>
        <p className="ml-4 text-[0.8rem] text-neutral-500">
          {latestMessage
            ? `${latestMessage.sender}: ${latestMessage.text}`
            : "No message yet"}
        </p>
      </div>
    </div>
  );
}

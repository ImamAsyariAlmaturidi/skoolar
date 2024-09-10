"use client";
import { useEffect, useState } from "react";
import MessageBoxOther from "./MessageBoxOther";
import MessageBoxMe from "./MessageBoxMe";
import {
  getAllMessagesByGroupId,
  sendMessage,
} from "../../app/dashboard/parent/chat/action"; // Ensure this path is correct
import { getMe } from "../../app/dashboard/parent/action";
import {
  collection,
  orderBy,
  query,
  Timestamp,
  onSnapshot,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { useParams, useSearchParams } from "next/navigation";

export default function ChatRoom({ id }) {
  const [messages, setMessages] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [currentUserName, setCurrentUserName] = useState("");
  const groupId = id;

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        const data = await getMe();
        if (data) {
          setCurrentUserId(data?._id);
          setCurrentUserName(data?.name);
        }
      } catch (error) {
        console.log("Error fetching current user: ", error);
      }
    }
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    if (!currentUserId) return;

    const messagesRef = collection(db, "chats");
    const q = query(
      messagesRef,
      where("group_id", "==", groupId),
      orderBy("last_timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const formattedMessages = messagesData.flatMap((doc) =>
        doc.messages.map((msg) => ({
          id: msg.timestamp,
          text: msg.content,
          sender:
            msg.sender_id === currentUserId ? currentUserName : msg.sender_id,
        }))
      );

      setMessages(formattedMessages);
    });

    return () => unsubscribe();
  }, [groupId, currentUserId]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    try {
      const timestamp = Timestamp.now();
      const messageData = {
        group_id: groupId,
        last_sender_id: currentUserId,
        last_sender_name: currentUserName,
        last_text: newMessage,
        last_timestamp: timestamp,
        messages: [
          {
            content: newMessage,
            sender_id: currentUserId,
            timestamp: timestamp,
            type: "text",
          },
        ],
      };

      console.log(messageData, "ini message datanya");

      await sendMessage(groupId, messageData);

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: timestamp.toMillis(),
          text: newMessage,
          sender: currentUserName,
        },
      ]);
      setNewMessage("");
    } catch (error) {
      console.log("Error sending message: ", error);
    }
  };

  return (
    <div className="flex antialiased text-gray-800 w-full h-full">
      <div className="flex flex-row h-full w-full ">
        <div className="flex flex-col flex-auto h-full ">
          <div className="flex flex-col flex-auto bg-white overflow-y-auto flex-shrink-0 rounded-2xl h-[90%] relative">
            <div className="flex flex-col h-full  mb-10">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-4">
                  {messages.map((message) =>
                    message.sender === currentUserName ? (
                      <MessageBoxMe
                        key={message.id}
                        text={message.text}
                        sender={message.sender}
                      />
                    ) : (
                      <MessageBoxOther
                        key={message.id}
                        text={message.text}
                        sender={message.sender}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center h-16 lg:h-14 rounded-xl w-full px-4">
            <div>
              <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-grow ml-4 ">
              <div className="relative w-full">
                <input
                  type="text"
                  className="flex w-full border-2 border-neutral-100 rounded-xl focus:outline-none  pl-4 py-3 bg-white"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                  className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                  onClick={handleSendMessage}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="ml-4">
              <button
                className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-2 flex-shrink-0"
                onClick={handleSendMessage}
              >
                <span>Send</span>
                <span className="ml-2">
                  <svg
                    className="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// app/insert-group-message.js
"use client";

import { useState } from "react";
import { createGroupMessage, getAllMessagesByGroupId } from "../admin/action";

export default function InsertGroupMessage() {
  const [channelId, setChannelId] = useState("");
  const [content, setContent] = useState("");
  const [messageId, setMessageId] = useState("");
  const [userId, setUserId] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date().toISOString());

  async function get(id) {
    const getChats = await getAllMessagesByGroupId(1);
  }

  const handleInsertMessage = async () => {
    try {
      const data = await createGroupMessage({
        channel_id: channelId,
        content,
        created_at: new Date(createdAt),
        message_id: messageId,
        user_id: userId,
      });
      setChannelId("");
      setContent("");
      setMessageId("");
      setUserId("");
      console.log(data);
    } catch (error) {
      alert("Error creating group message.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={channelId}
        onChange={(e) => setChannelId(e.target.value)}
        placeholder="Channel ID"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Message Content"
      />
      <input
        type="text"
        value={messageId}
        onChange={(e) => setMessageId(e.target.value)}
        placeholder="Message ID"
      />
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="datetime-local"
        value={createdAt}
        onChange={(e) => setCreatedAt(e.target.value)}
      />
      <button onClick={() => get(1)}>Insert Group Message</button>
    </div>
  );
}

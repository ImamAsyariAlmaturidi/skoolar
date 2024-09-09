"use server";
import { cookies } from "next/headers";
import { db } from "../../../../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  addDoc,
  Timestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

export async function getUserId() {
  try {
    const cookieStore = cookies();
    const userId = cookieStore.get("user_id");
    return userId;
  } catch (error) {
    console.error("Error getting user ID: ", error);
    throw error;
  }
}

export async function getAllMessagesByGroupId(groupId) {
  try {
    const messagesRef = collection(db, "chats");

    const q = query(
      messagesRef,
      where("group_id", "==", groupId),
      orderBy("last_timestamp", "asc")
    );

    const querySnapshot = await getDocs(q);

    const messages = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return messages;
  } catch (error) {
    console.error("Error getting messages: ", error);
    throw error;
  }
}

export async function sendMessage(groupId, messageData) {
  try {
    if (!messageData) {
      throw new Error(
        "Invalid message data. content and sender_id are required."
      );
    }

    const messagesRef = collection(db, "chats");

    await addDoc(messagesRef, {
      ...messageData,
      group_id: groupId,
      timestamp: Timestamp.now(),
      last_timestamp: Timestamp.now(),
    });

    // const groupRef = getDocs(db, "chats", groupId);

    // console.log(groupRef.id);
    // await updateDoc(groupRef, {
    //   last_message: messageData.messages[0].content,
    //   last_timestamp: Timestamp.now(),
    //   last_sender_id: messageData.messages[0].sender_id,
    // });

    return { status: "Message sent successfully" };
  } catch (error) {
    console.error("Error sending message: ", error);
    throw error;
  }
}

export async function getAllGroup() {
  try {
    const res = await fetch("http://localhost:3000/api/group", {
      cache: "no-store",
      method: "GET",
      headers: {
        Cookie: cookies().toString(),
      },
    });

    if (!res.ok) {
      throw new Error(`Error fetching groups: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching groups: ", error);
    throw error;
  }
}

export async function getUserIdOther(id) {
  console.log(id);
  try {
    const res = await fetch(`http://localhost:3000/api/parent/${id}`, {
      cache: "no-store",
      method: "GET",
      headers: {
        Cookie: cookies().toString(),
        id: id,
      },
    });
    if (!res.ok) {
      throw new Error(`Error fetching groups: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getTeaacherIdOther(id) {
  console.log(id);
  try {
    const res = await fetch(`http://localhost:3000/api/parent/${id}`, {
      cache: "no-store",
      method: "GET",
      headers: {
        Cookie: cookies().toString(),
        id: id,
      },
    });
    if (!res.ok) {
      throw new Error(`Error fetching groups: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

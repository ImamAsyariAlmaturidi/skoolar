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
} from "firebase/firestore";
// import { snap } from "../../../config/midtrans";

// export async function getAllMessagesByGroupId(groupId) {
//   try {
//     const messagesRef = collection(db, "chats");

//     const q = query(
//       messagesRef,
//       where("group_id", "==", groupId),
//       orderBy("last_timestamp")
//     );

//     const querySnapshot = await getDocs(q);

//     const messages = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     return messages;
//   } catch (error) {
//     console.error("Error getting messages: ", error);
//     throw error;
//   }
// }

// export async function sendMessage(groupId, messageData) {
//   console.log(messageData);
//   try {
//     const messagesRef = collection(db, "chats");
//     await addDoc(messagesRef, {
//       ...messageData,
//       group_id: groupId,
//       last_timestamp: new Date(),
//     });

//     return { status: "Message sent successfully" };
//   } catch (error) {
//     console.error("Error sending message: ", error);
//     throw error;
//   }
// }

export async function getAllGroup() {
  try {
    const res = await fetch("http://localhost:3000/api/group", {
      cache: "no-store",
      method: "GET",
      headers: {
        Cookie: cookies().toString(),
      },
    });

    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

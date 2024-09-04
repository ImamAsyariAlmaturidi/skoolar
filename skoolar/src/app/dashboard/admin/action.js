"use server";
import { db } from "../../../config/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";

export async function createGroup(data) {
  try {
    await addDoc(collection(db, "group"), data);
  } catch (error) {
    throw error;
  }
}

export async function getAllMessagesByGroupId(groupId) {
  try {
    const messagesRef = collection(db, "group_message");

    const q = query(
      messagesRef,
      where("group_id", "==", groupId),
      orderBy("created_at")
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

export async function deleteGroup(idGroup) {
  try {
    const docRef = doc(db, "group", idGroup);
    await deleteDoc(docRef);
  } catch (error) {
    throw error;
  }
}

export async function createGroupMessage({
  channel_id,
  content,
  created_at,
  message_id,
  user_id,
}) {
  try {
    const res = await addDoc(collection(db, "group_message"), {
      channel_id,
      content,
      created_at,
      message_id,
      user_ref: doc(db, "users", user_id),
    });
  } catch (error) {
    console.error("Error creating group message: ", error);
    throw error;
  }
}

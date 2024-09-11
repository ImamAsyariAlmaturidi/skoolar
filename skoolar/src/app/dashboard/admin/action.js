"use server";
import { db } from "../../../config/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
  doc,
} from "firebase/firestore";
// import { snap } from "../../../config/";
import { cookies } from "next/headers";

// INI FIREBASE
export async function createGroup(data) {
  try {
    await addDoc(collection(db, "group"), data);
  } catch (error) {
    throw error;
  }
}

export async function getAllMessagesByGroupId() {
  try {
    const messagesRef = collection(db, "group_message");

    const q = query(
      messagesRef,
      where("group_id", "==", 1),
      orderBy("created_at")
    );

    const querySnapshot = await getDocs(q);

    const messages = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    // console.log(messages);
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
  group_id,
  content,
  created_at,
  message_id,
  user_id,
}) {
  try {
    const res = await addDoc(collection(db, "group_message"), {
      group_id,
      content,
      created_at,
      message_id,
      user_ref: doc(db, "users", user_id),
    });

    // console.log(res);
  } catch (error) {
    console.error("Error creating group message: ", error);
    throw error;
  }
}

// INI MIDTRANS
async function createTransaction(
  gross_amount,
  name,
  price,
  payment_name,
  payment_category
) {
  try {
    const parameter = {
      transaction_details: {
        order_id: transaction.order_id,
        gross_amount,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        name,
      },
      item_details: {
        id: "ITEM1",
        price,
        name: payment_name,
        category: payment_category,
        merchant_name: "Skoolar",
      },
    };
    const { token } = await snap.createTransaction(parameter);
  } catch (error) {
    console.log(error);
  }
}

export async function getAllUser(params) {
  try {
    const response = await fetch("https://skoolar.vercel.app/api/user", {
      headers: {
        Cookie: cookies().toString(),
      },
    });
    const { data } = await response.json();
    const result = data.filter((el) => el.role === "teacher");

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getParent(params) {
  try {
    const response = await fetch("https://skoolar.vercel.app/api/parents", {
      headers: {
        Cookie: cookies().toString(),
      },
    });
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getGroup(params) {
  try {
    const response = await fetch("https://skoolar.vercel.app/api/getOneGroup", {
      headers: {
        Cookie: cookies().toString(),
      },
    });
    const { data } = await response.json();
    // console.log(data, "data groups di list0user");

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getGroupTeacher(groupId) {
  try {
    const res = await fetch(`https://skoolar.vercel.app/api/group/${groupId}`, {
      cache: "no-store",
      method: "GET",
      headers: {
        Cookie: cookies().toString(),
      },
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
}

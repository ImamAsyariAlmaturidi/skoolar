"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CreateNotification } from "../../../../db/models/notification";

export async function getTransactions() {
  try {
    const res = await fetch("http://localhost:3000/api/transaction", {
      cache: "no-store",
      method: "GET",
      headers: {
        Cookie: cookies().toString(),
      },
    });

    const result = await res.json();

    // console.log(result, "<<<<<< result");

    return result;
  } catch (error) {
    throw error;
  }
}

export async function createTransaction() {
  try {
    const res = await fetch("http://localhost:3000/api/transaction", {
      cache: "no-store",
      method: "POST",
      headers: {
        Cookie: cookies().toString(),
      },
    });

    const result = await res.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function redirectHistory() {
  revalidatePath("/dashboard/parent/transaction/history");
  redirect("/dashboard/parent/transaction/history");
}

export async function updateTransaction(requestData) {
  console.log("masuk action");
  try {
    const res = await fetch("http://localhost:3000/api/transaction", {
      method: "PATCH",
      body: JSON.stringify({ token: requestData }),
    });
    console.log(await res.json());
  } catch (error) {
    console.log(error);
  }
}

export async function addNotif(parent_id) {
  // console.log(parent_id);

  const payloadNotification = {
    title: "Finance",
    content: "Success Payment",
    parent_id: new ObjectId(parent_id),
  };

  const notif = await CreateNotification(payloadNotification);
  console.log(notif, "<<<< notif");
}

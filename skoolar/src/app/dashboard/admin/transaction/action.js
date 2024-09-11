"use server";

import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import { createTransaction } from "../../parent/transaction/action";
import { createTransactionNew } from "../../../../db/models/Transaction";
import { CreateNotification } from "../../../../db/models/notification";

export async function getTranscation(params) {
  const response = await fetch("http://localhost:3000/api/transactionData", {
    cache: "no-store",
    method: "GET",
    headers: {
      Cookie: cookies().toString(),
    },
  });
  const { data } = await response.json();
  console.log(data, "<<<< data transaction");

  return data;
}

export async function postNewTransaction(formData) {
  const description = formData.get("description");
  const amount = formData.get("amount");
  const dueDate = formData.get("dueDate");
  const parent_id = formData.get("parent_id");

  const payload = {
    description,
    amount: +amount,
    dueDate,
    parentId: new ObjectId(parent_id),
  };
  console.log(payload, "<<<< payloadd");

  await createTransactionNew(payload);
  console.log("success add new transaction");

  const payloadNotification = {
    title: "Finance",
    content: `You have New Bill. with title: ${description}.`,
    parent_id: new ObjectId(parent_id),
  };

  await CreateNotification(payloadNotification);
  console.log("success add Notification");

  return { success: true };
}

"use server";
import { cookies } from "next/headers";

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

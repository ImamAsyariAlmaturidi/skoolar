"use server";
import { cookies } from "next/headers";

export async function getMe() {
  try {
    const res = await fetch("http://localhost:3000/api/parent", {
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

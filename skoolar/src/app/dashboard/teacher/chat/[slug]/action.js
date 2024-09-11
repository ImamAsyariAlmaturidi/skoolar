"use server";
import { cookies } from "next/headers";

export async function groupId(id) {
  try {
    const res = await fetch(`https://skoolar.vercel.app/api/group/${id}`, {
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

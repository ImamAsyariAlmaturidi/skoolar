"use server";
import { cookies } from "next/headers";

export async function getAllGroup() {
  try {
    const res = await fetch("https://skoolar.vercel.app/api/group", {
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

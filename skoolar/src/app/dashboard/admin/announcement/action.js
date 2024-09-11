"use server";
import { cookies } from "next/headers";
import { CreateAnnouncement } from "../../../../db/models/announcement";

export async function AddNewAnnouncement(formData) {
  try {
    console.log("haloo masuk action postTeacher");

    const title = formData.get("title");
    const content = formData.get("content");

    const payload = { title, content };
    console.log(payload);

    const newUser = await CreateAnnouncement(payload);
    return { success: true };
  } catch (error) {
    console.error("Error fetching groups: ", error);
    throw error;
  }
}

export async function getSchoolAnnouncement() {
  try {
    const res = await fetch("https://skoolar.vercel.app/api/announcement", {
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

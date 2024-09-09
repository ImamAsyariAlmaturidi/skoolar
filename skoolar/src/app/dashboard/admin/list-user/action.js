"use server";

import { cookies } from "next/headers";

export async function getAllUser(params) {
  try {
    const response = await fetch("http://localhost:3000/api/user", {
      headers: {
        Cookie: cookies().toString(),
      },
    });
    const { data } = await response.json();
    const result = data.filter((el) => el.role === "teacher");
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getParent(params) {
  try {
    const response = await fetch("http://localhost:3000/api/parents", {
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

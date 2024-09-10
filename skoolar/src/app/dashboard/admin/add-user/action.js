"use server";

import { createGroup } from "../../../../db/models/Group";

export async function getGroup(params) {
  try {
    const response = await fetch("http://localhost:3000/api/getOneGroup", {
      headers: {
        Cookie: cookies().toString(),
      },
    });
    const { data } = await response.json();
    // console.log(data, "data groups");

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postGroup(formData) {
  try {
    console.log("masuk nih wlee");

    const name = formData.get("name");
    const teacher_id = formData.get("teacher_id");
    const parent_id = JSON.parse(formData.get("parent_id"));

    const payload = { name, teacher_id, parent_id };

    await createGroup(payload);
    return { success: true };
  } catch (error) {}
}

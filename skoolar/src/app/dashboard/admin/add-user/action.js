"use server";

import { ObjectId } from "mongodb";
import { createGroup, groupWithName } from "../../../../db/models/Group";
import { updateGroupParent } from "../../../../db/models/Parent";
import { updateGroupTeacher } from "../../../../db/models/User";

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


    const parentIds = [];
    parent_id.forEach((value, key) => {
      parentIds.push(new ObjectId(value))
    });


    const payload = { name, teacher_id: new ObjectId(teacher_id), parent_id: parentIds };

    console.log(payload);
    const newGroup = await createGroup(payload);

    console.log(newGroup, "<<<<<<<<<<<<<<<< idnya");

    for (const parentId of parent_id) {
      await updateGroupParent(newGroup, parentId);
    }
    console.log("success update parent");

    const result = await updateGroupTeacher(newGroup, teacher_id);
    console.log("success update User", result);



    return { success: true };
  } catch (error) { }
}

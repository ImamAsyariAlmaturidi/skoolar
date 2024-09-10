"use server";

import { cookies } from "next/headers";
import { createUser } from "../../../../db/models/User";
import { getAllGroup, updateStudentGroup } from "../../../../db/models/Group";
import { NextResponse } from "next/server";
import { createParent } from "../../../../db/models/Parent";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

// import Swal from "sweetalert2";

export async function getAllUser(params) {
  try {
    const response = await fetch("http://localhost:3000/api/user", {
      headers: {
        Cookie: cookies().toString(),
      },
    });
    const { data } = await response.json();
    const result = data.filter((el) => el.role === "teacher");

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

export async function postTeacher(formData) {
  console.log("haloo masuk action postTeacher");

  const NIK = formData.get("NIK");
  const password = formData.get("password");
  const email = formData.get("email");
  const name = formData.get("name");
  const role = "teacher";
  const SchoolId = "66d76256160df0cce63a8382";
  const GroupId = [];

  const payload = { NIK, password, email, name, SchoolId, GroupId };
  console.log(payload);

  const newUser = await createUser(payload);
  revalidatePath("/dashboard/admin/list-user");
  return { success: true };
}

export async function getGroup(params) {
  try {
    const response = await fetch("http://localhost:3000/api/getOneGroup", {
      headers: {
        Cookie: cookies().toString(),
      },
    });
    const { data } = await response.json();
    console.log(data, "data groups di list0user");

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postStudent(formData) {
  try {
    console.log("haloo masuk action postTeacher");

    const parentName = formData.get("parentName");
    const password = formData.get("password");
    const email = formData.get("email");
    const studentName = formData.get("studentName");
    const NISN = formData.get("NISN");
    const GroupId = formData.get("GroupId");
    const SchoolId = "66d76256160df0cce63a8382";

    const payload = {
      NISN,
      password,
      email,
      parentName,
      studentName,
      SchoolId,
      GroupId,
    };
    // console.log(payload, "iniii di ekyongg student");

    const newStudent = await createParent(payload);
    // console.log(newStudent);

    console.log("success add student");

    await updateStudentGroup(GroupId, newStudent.insertedId);

    console.log("success add to group");

    return { success: true };
  } catch (error) {
    console.log(error);
  }
}

export async function GetTeachersClass(params) {
  try {
    console.log(params, "weh ini kemana jingg");
    const response = await fetch(`http://localhost:3000/api/group/${params}`, {
      headers: {
        Cookie: cookies().toString(),
      },
    });
    const { data } = await response.json();
    // console.log(data, "data groups di list0user");
    return data;
  } catch (error) {
    console.log(error);
  }
}

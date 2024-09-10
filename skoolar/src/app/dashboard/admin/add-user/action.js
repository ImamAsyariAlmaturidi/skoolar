export async function getGroup(params) {
  try {
    const response = await fetch("http://localhost:3000/api/getOneGroup", {
      headers: {
        Cookie: cookies().toString(),
      },
    });
    const { data } = await response.json();
    console.log(data, "data groups");

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postGroup(params) {
  try {
    const name = formData.get("name");
    const teacher_id = formData.get("teacher_id");
    const parent_id = formData.get("parent_id");

    const payload = { name, teacher_id, parent_id };
  } catch (error) {}
}

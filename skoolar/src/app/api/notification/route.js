import { NextResponse } from "next/server";

import { getNotification } from "../../../db/models/notification";
import { ObjectId } from "mongodb";

export async function GET(request) {
  const id = request.headers.get("x-user-id");
//   console.log(id, "<<<< id");

  try {
    const data = await getNotification();
    // console.log(data, "data di APII");
    const result = data.filter((el) => {
      return el.parent_id.equals(id) === true;
    });

    // console.log(result, "<<<< result");

    return NextResponse.json({
      statusCode: 200,
      message: "Success get data parent",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error",
      data: [],
    });
  }
}

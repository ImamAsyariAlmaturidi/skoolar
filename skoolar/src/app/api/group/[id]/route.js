import { NextResponse } from "next/server";
import { getGroupById } from "../../../../db/models/Group";

export async function GET(request, params) {
  try {
    const data = await getGroupById(params.params.id);
    return NextResponse.json({
      statusCode: 200,
      message: "success get data by id ",
      data,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error",
      data: [],
    });
  }
}

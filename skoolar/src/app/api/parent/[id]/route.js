import { NextResponse } from "next/server";
import { getParentById } from "../../../../db/models/Parent";

export async function GET(id) {
  console.log(id, "this is id");
  try {
    const data = await getParentById(id);
    return NextResponse.json({
      statusCode: 201,
      message: "Succes create Parent User",
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

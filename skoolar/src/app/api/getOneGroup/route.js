import { NextResponse } from "next/server";
import { getAllGroup } from "../../../db/models/Group";

export async function GET() {
  try {
    const data = await getAllGroup();

    return NextResponse.json({
      statusCode: 200,
      message: "Succes get all user",
      data: data,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error",
      data: [],
    });
  }
}

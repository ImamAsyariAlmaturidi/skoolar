import { NextResponse } from "next/server";
import { parentWithGroup } from "../../../db/models/Parent";


export async function GET() {
  try {
    const data = await parentWithGroup();

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

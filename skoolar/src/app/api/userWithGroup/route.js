import { NextResponse } from "next/server";
import { userWithGroup } from "../../../db/models/User";

export async function GET() {
  try {
    const data = await userWithGroup();

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

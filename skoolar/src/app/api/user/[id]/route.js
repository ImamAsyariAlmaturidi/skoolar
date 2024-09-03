import { NextResponse } from "next/server";
export async function GET({ oarams }) {
  try {
    const data = "ini data user id 1";
    return NextResponse.json({
      statusCode: 200,
      message: "Internal server error",
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

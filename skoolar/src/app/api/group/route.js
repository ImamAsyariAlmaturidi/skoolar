import { NextResponse } from "next/server";
import Joi from "joi";
import { getGroupWhereIncludeUserId } from "../../../db/models/Group";
const schema = Joi.object({
  groupName: Joi.string().required().min(4).max(30),
  userId: Joi.string().required(),
});
export async function POST(request) {
  const userId = request.headers.get("x-user-id");
  const { groupName } = request.json();
  try {
    const parsedData = schema.validate({ groupName, userId });
    if (parsedData.error) {
      return NextResponse.json({
        statusCode: 400,
        message: parsedData.error,
        data,
      });
    }
    const data = "ini data";
    return NextResponse.json({
      statusCode: 201,
      message: "Succes Created Group!",
      data,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error!",
      data: [],
    });
  }
}

export async function GET(request) {
  const userId = request.headers.get("x-user-id");
  try {
    if (!userId) {
      return (
        NextResponse.json({
          statusCode: 400,
          message: "Invalid user ID",
          data: [],
          error: "BAD REQUEST",
        }),
        { status: 400 }
      );
    }
    const data = await getGroupWhereIncludeUserId(userId);

    return NextResponse.json({
      statusCode: 200,
      message: "Success get data",
      data,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error!",
      data: [],
    });
  }
}

export async function DELETE() {
  const userId = request.headers.get("x-user-id");
  try {
    if (!userId) {
      return (
        NextResponse.json({
          statusCode: 400,
          message: "Invalid user ID",
          data: [],
          error: "BAD REQUEST",
        }),
        { status: 400 }
      );
    }

    const data = "ini data";
    return NextResponse.json({
      statusCode: 200,
      message: "Success leave group",
      data,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error",
      data,
    });
  }
}

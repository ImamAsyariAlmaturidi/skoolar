import { NextResponse } from "next/server";
import Joi from "joi";
import { getAllParents, getParentByNISN } from "../../../db/models/Parent";
const schema = Joi.object({
  parentName: Joi.string().min(2).required(),
  parentName: Joi.string().required().min(2),
  schoolId: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(5),
});

export async function POST(request) {
  try {
    const parsedData = schema.validate({ request });

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
export async function GET(request) {
  try {
    const data = await getAllParents();
    return NextResponse.json({
      statusCode: 200,
      message: "Success get data parent",
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
export async function DELETE(request) {
  try {
    return NextResponse.json({
      statusCode: 201,
      message: "Success Delete Parent",
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

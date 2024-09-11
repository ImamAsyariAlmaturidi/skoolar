import Midtrans from "midtrans-client";
import {
  createTransaction,
  getTransactionByParentId,
  updatePaidTransaction,
  updatePendingTransaction,
} from "../../../db/models/Transaction";
import { NextResponse } from "next/server";
import { generateUniqueOrderId } from "../../../db/utils/timestamp";
let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SERVER_KEY_MIDTRANS,
  clientKey: process.env.CLIENT_KEY_MIDTRANS,
});

export async function GET(request) {
  const parent_id = request.headers.get("x-user-id");
  try {
    const data = await getTransactionByParentId(parent_id);
    return NextResponse.json({
      statusCode: 200,
      message: "success get all transaction by parentid",
      data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error",
      data: [],
    });
  }
}

export async function POST(request) {
  const parent_id = request.headers.get("x-user-id");
  const { description, amount, due_date, transactionIds } =
    await request.json();

  // console.log(transactionIds, "<<< ids");
  const order_id = generateUniqueOrderId();

  const transaction = {
    description,
    amount,
    parent_id,
    due_date,
  };
  let parameter = {
    transaction_details: {
      order_id: order_id,
      gross_amount: amount,
    },
  };

  // const result = await createTransaction(transaction);
  // console.log(result);
  const token = await snap.createTransactionToken(parameter);

  await updatePendingTransaction(transactionIds, token);
  // console.log(token, "<<< token");
  return Response.json({
    token,
  });
}

export async function PATCH(request) {
  console.log(request);
  console.log("masuk di patch");
  // const parent_id = request.headers.get("x-user-id");
  const { token } = await request.json();

  console.log(token, "<<< tokenn");

  const result = await updatePaidTransaction(token);

  return Response.json({ result });
}

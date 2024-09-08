import Midtrans from "midtrans-client";

// import { NextResponse } from "next-server";

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SERVER_KEY_MIDTRANS,
  clientKey: process.env.CLIENT_KEY_MIDTRANS,
});

export async function POST(request) {
  const { id, productName, price, quantity } = await request.json();

  let parameter = {
    item_details: {
      name: productName,
      price: price,
      quantity: quantity,
    },
    transaction_details: {
      order_id: id,
      gross_amount: price * quantity,
    },
  };

  const token = await snap.createTransactionToken(parameter);

  console.log(token);

  return Response.json({
    token,
  });
}

export async function PATCH(order_id) {
  const { id, productName, price, quantity } = await request.json();
}

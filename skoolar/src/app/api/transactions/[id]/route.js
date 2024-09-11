"use server";

import { getTransactionById } from "../../../../db/models/Transaction";

export async function GET(request, params) {
  const result = await getTransactionById(params.params.id);
  return Response.json({ result });
}

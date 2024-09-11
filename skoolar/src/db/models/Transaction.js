import { ObjectId } from "mongodb"; // Import ObjectId if you're using it
import { getMongoClientInstance } from "../../config/mongo";

const DATABASE_NAME = process.env.DATABASE_NAME || "skoolar";
const COLLECTION_TRANSACTION = "transaction";

export const getDb = async () => {
  try {
    const client = await getMongoClientInstance();
    const db = client.db(DATABASE_NAME);
    return db;
  } catch (error) {
    console.error("Failed to get database connection", error);
    throw error;
  }
};

export const getTransactionByParentId = async (parent_id) => {
  console.log(parent_id);
  try {
    const db = await getDb();

    const result = await db
      .collection(COLLECTION_TRANSACTION)
      .find({
        parentId: new ObjectId(parent_id),
      })
      .toArray();

    return result;
  } catch (error) {
    throw error;
  }
};

export const createTransactionNew = async (transaction) => {
  try {
    const db = await getDb();
    const transactions = {
      ...transaction,
      status: "pending",
    };
    const result = await db
      .collection(COLLECTION_TRANSACTION)
      .insertOne(transactions);
    return result;
  } catch (error) {
    throw error;
  }
};

export const updatePendingTransaction = async (
  transactionIds = [],
  tokenMidtrans = ""
) => {
  try {
    const db = await getDb();
    for await (const transactionId of transactionIds) {
      await db
        .collection(COLLECTION_TRANSACTION)
        .updateOne(
          { _id: new ObjectId(transactionId) },
          { $set: { tokenMidtrans, status: "pending" } }
        );
    }

    return "success update pending";
  } catch (error) {
    throw error;
  }
};

export const updatePaidTransaction = async (tokenMidtrans) => {
  console.log(tokenMidtrans);
  try {
    const db = await getDb();
    const result = await db
      .collection(COLLECTION_TRANSACTION)
      .updateOne({ tokenMidtrans }, { $set: { status: "paid" } });
    return result;
  } catch (error) {
    throw error;
  }
};

export const updateTransaction = async (order_id) => {
  try {
    const db = await getDb();
    const result = await db
      .collection(COLLECTION_TRANSACTION)
      .updateOne({ order_id }, { $set: { status: "paid" } });
    return result;
  } catch (error) {
    throw error;
  }
};

export const getAllTransaction = async () => {
  const db = await getDb();
  const collection = db.collection(COLLECTION_TRANSACTION);

  const agg = [
    {
      $lookup: {
        from: "parent",
        localField: "parentId",
        foreignField: "_id",
        as: "parents",
      },
    },
  ];

  const data = await collection.aggregate(agg).toArray();
  return data;
};

export const getTransactionById = async (idTransaction) => {
  console.log("id transaksi", idTransaction);
  const db = await getDb();
  const collection = db.collection(COLLECTION_TRANSACTION);

  const data = await collection.findOne({
    _id: new ObjectId(idTransaction),
  });

  console.log(data);
  return data;
};

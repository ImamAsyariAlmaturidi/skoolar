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

export const createTransaction = async (transaction) => {
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

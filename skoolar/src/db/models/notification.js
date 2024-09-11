import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../../config/mongo";

const DATABASE_NAME = process.env.DATABASE_NAME || "skoolar";
const COLLECTION_NOTIFICATION = "notification";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);
  return db;
};

export const CreateNotification = async (payload) => {
  const db = await getDb();
  const collection = db.collection(COLLECTION_NOTIFICATION);
  const result = await collection.insertOne(payload);
  console.log(result);
  return result;
};

export const getNotification = async () => {
  console.log("masuk model notif");

  const db = await getDb();
  const notif = await db.collection(COLLECTION_NOTIFICATION).find().toArray();
  return notif;
};

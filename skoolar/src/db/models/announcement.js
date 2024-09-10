import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../../config/mongo";

const DATABASE_NAME = process.env.DATABASE_NAME || "skoolar";
const COLLECTION_ANNOUNCEMENT = "announcement";

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);
  return db;
};

export const getAllAnnouncement = async () => {
  const db = await getDb();
  const announcement = await db
    .collection(COLLECTION_ANNOUNCEMENT)
    .find()
    .toArray();
  return announcement;
};

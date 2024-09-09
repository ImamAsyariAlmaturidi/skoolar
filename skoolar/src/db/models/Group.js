import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../../config/mongo";

const DATABASE_NAME = process.env.DATABASE_NAME || "skoolar";
const COLLECTION_GROUP = "group";

// Function to get the database instance
export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);
  return db;
};

// Function to get a group by userId
export const getGroupWhereIncludeUserId = async (userId) => {
  const db = await getDb();
  const collection = db.collection(COLLECTION_GROUP);

  const agg = [
    {
      $lookup: {
        from: "parent",
        localField: "parent_id",
        foreignField: "_id",
        as: "parents",
      },
    },
    {
      $lookup: {
        from: "user",
        localField: "teacher_id",
        foreignField: "_id",
        as: "teacher",
      },
    },
    {
      $project: {
        "teacher.password": 0,
        "parents.password": 0,
      },
    },
    {
      $match: {
        "parents._id": new ObjectId(userId),
      },
    },
  ];

  const groups = await collection.aggregate(agg).toArray();

  console.log(groups);
  return groups;
};

// BARU
export const getGroup = async () => {
  const db = await getDb();

  const groups = await db.collection(COLLECTION_GROUP).find().toArray();
  return groups;
};

export const createGroup = async (groupData) => {
  const db = await getDb();
  const collection = db.collection(COLLECTION_GROUP);

  const result = await collection.insertOne(groupData);
  return result.insertedId;
};

export const deleteGroup = async (groupId) => {
  const db = await getDb();
  const collection = db.collection(COLLECTION_GROUP);

  const result = await collection.deleteOne({
    _id: new ObjectId(groupId),
  });
  return result.deletedCount > 0;
};

export const deleteUserFromGroup = async (groupId, userId) => {
  const db = await getDb();
  const collection = db.collection(COLLECTION_GROUP);

  const result = await collection.updateOne(
    { _id: new ObjectId(groupId) },
    { $pull: { users: userId } }
  );

  return result.modifiedCount > 0;
};

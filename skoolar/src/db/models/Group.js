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

export const getGroupById = async (group_id) => {
  const db = await getDb();
  const collection = db.collection(COLLECTION_GROUP);

  const group = await collection.findOne({
    _id: new ObjectId(group_id),
  });

  return group;
};

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
        $or: [
          { "parents._id": new ObjectId(userId) },
          { "teacher._id": new ObjectId(userId) },
        ],
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

export const getAllGroup = async () => {
  const db = await getDb();
  const group = await db.collection(COLLECTION_GROUP).find().toArray();
  return group;
};

export const updateStudentGroup = async (GroupId, newParentId) => {
  const db = await getDb();
  const collection = db.collection(COLLECTION_GROUP);

  const result = await collection.updateOne(
    { _id: new ObjectId(GroupId) },
    { $push: { parent_id: newParentId } }
  );

  console.log(result, "result update");

  return result;
};

export const groupWithName = async () => {
  const db = await getDb()
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
  ]

  const groups = await collection.aggregate(agg).toArray();
  return groups;
}
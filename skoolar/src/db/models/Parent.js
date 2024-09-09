import { ObjectId } from "mongodb";
import { getMongoClientInstance } from "../../config/mongo";
const DATABASE_NAME = process.env.DATABASE_NAME || "skoolar";
const COLLECTION_PARENT = "parent";
const COLLECTION_USER = "user";
export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);

  return db;
};

export const getUser = async () => {
  const db = await getDb();

  const parent = await db
    .collection(COLLECTION_PARENT)
    .find()
    .project({ password: 0, createdAt: 0, updatedAt: 0 })
    .toArray();
  return parent;
};

export const createParent = async (parent) => {
  const modifiedUser = {
    ...parent,
    password: hashText(parent.password),
  };
  const db = await getDb();
  const result = await db.collection(COLLECTION_PARENT).insertOne(modifiedUser);

  return result;
};

export const getAllParents = async () => {
  const db = await getDb();
  const parent = await db.collection(COLLECTION_PARENT).find().toArray();
  return parent;
};

export const getParentByName = async (name) => {
  const db = await getDb();
  const parent = await db.collection(COLLECTION_PARENT).findOne({ name: name });

  return parent;
};

export const getParentByNISN = async (NISN) => {
  const db = await getDb();
  const parent = await db.collection(COLLECTION_PARENT).findOne({ NISN: NISN });
  return parent;
};

export const getParentOrUser = async (id) => {
  const db = await getDb();

  try {
    let document = await db
      .collection(COLLECTION_PARENT)
      .findOne({ _id: new ObjectId(id) });

    if (!document) {
      document = await db
        .collection(COLLECTION_USER)
        .findOne({ _id: new ObjectId(id) });
    }

    return document;
  } catch (error) {
    throw error;
  }
};

export const getParentById = async (id) => {
  const db = await getDb();
  const parent = await db
    .collection(COLLECTION_PARENT)
    .findOne({ _id: new ObjectId(id) });
  return parent;
};

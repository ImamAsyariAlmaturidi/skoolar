const DATABASE_NAME = process.env.DATABASE_NAME || "skoolar";
const COLLECTION_USER = "group";
export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);

  return db;
};

export const getGroup = async () => {
  const db = await getDb();
  return;
};

export const createGroup = async (group) => {
  return;
};

export const deleteGroup = async () => {
  return;
};

export const deleteUserFromGroup = async (groupId) => {
  return;
};

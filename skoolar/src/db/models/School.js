const DATABASE_NAME = process.env.DATABASE_NAME || "skoolar";
const COLLECTION_USER = "school";
export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);

  return db;
};

export const createSchool = async () => {
  return;
};

export const getSchool = async () => {
  return;
};

export const updateSchool = async () => {
  return;
};

export const deleteSchool = async () => {
  return;
};

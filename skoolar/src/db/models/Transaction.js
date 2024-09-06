const DATABASE_NAME = process.env.DATABASE_NAME || "skoolar";
const COLLECTION_USER = "transaction";
export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db(DATABASE_NAME);

  return db;
};

export const createTransaction = async () => {
  return;
};

export const updateTransaction = async () => {
  return;
};

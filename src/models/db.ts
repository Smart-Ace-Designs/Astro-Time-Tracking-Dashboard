import { MongoClient } from "mongodb";

const uri = import.meta.env.MONGODB_URI;
if (!uri) {
  throw new Error("Missing environment variable for MongoDB.");
}

const client = new MongoClient(uri);

const connectToDB = async () => {
  await client.connect();
  return client.db("timesheet");
};

export const timeEntriesCollection = async () => {
  const db = await connectToDB();
  return db.collection("entries");
};

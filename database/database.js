import mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;
let database;

export async function connectToDatabase() {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    database = client.db("demo");
  } catch (error) {
    console.log(error);
  }
}

export function getDb() {
  return database;
}

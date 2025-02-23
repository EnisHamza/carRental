const { MongoClient } = require("mongodb");

let mongodb;

async function connectToDatabase() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    const client = await MongoClient.connect(mongoUri);
    mongodb = client.db("carRental");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
}

function getDb() {
  return mongodb;
}

module.exports = { connectToDatabase, getDb };

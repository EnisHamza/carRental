const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
var mongodb;

async function connectDB() {
  try {
    await client.connect();
    mongodb = client.db();
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Failed to Connect to Database", error);
  }
}

module.exports = { mongodb, connectDB };

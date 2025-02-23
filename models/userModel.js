const { getDb } = require("../utils/db");
const { ObjectId } = require("mongodb");

async function createUser(fullName, email, username, password) {
  const db = getDb();
  const result = await db.collection("users").insertOne({
    fullName,
    email,
    username,
    password,
  });
  return result;
}

async function findUserByUsername(username) {
  const db = getDb();
  return db.collection("users").findOne({ username });
}

async function findUserById(id) {
  const db = getDb();
  return db
    .collection("users")
    .findOne({ _id: ObjectId(id) }, { projection: { password: 0 } });
}

module.exports = { createUser, findUserByUsername, findUserById };

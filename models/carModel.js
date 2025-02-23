const { getDb } = require("../utils/rent");

async function getRentalCars(query) {
  const db = getDb();
  return db.collection("cars").find(query).sort({ price_per_day: 1 }).toArray();
}

module.exports = { getRentalCars };

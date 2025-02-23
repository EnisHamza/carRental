const { getRentalCars } = require("../models/carModel");

async function getCars(req, res) {
  const { year, color, steering_type, number_of_seats } = req.query;
  const query = {};

  if (year) query.year = parseInt(year);
  if (color) query.color = color;
  if (steering_type) query.steering_type = steering_type;
  if (number_of_seats) query.number_of_seats = parseInt(number_of_seats);

  try {
    const cars = await getRentalCars(query);
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cars", error: err });
  }
}

module.exports = { getCars };

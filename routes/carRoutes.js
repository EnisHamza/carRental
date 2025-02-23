const express = require("express");
const { getCars } = require("../controllers/carController");

const router = express.Router();

router.get("/rental-cars", getCars);

module.exports = router;

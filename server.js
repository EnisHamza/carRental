const express = require("express");
const { connectDB } = require("./config/rent");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

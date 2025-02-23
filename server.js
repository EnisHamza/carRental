require("dotenv").config();
const express = require("express");
const { connectToDatabase } = require("./utils/rent");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Start the server
connectToDatabase().then(() => {
  const port = process.env.PORT || 5000; // Get the port directly from .env
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});

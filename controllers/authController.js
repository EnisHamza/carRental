const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  createUser,
  findUserByUsername,
  findUserById,
} = require("../models/userModel");

async function register(req, res) {
  const { fullName, email, username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await createUser(fullName, email, username, hashedPassword);
    res.status(201).json({
      message: "User registered successfully",
      userId: user.insertedId,
    });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err });
  }
}

async function login(req, res) {
  const { username, password } = req.body;

  const user = await findUserByUsername(username);
  if (!user) return res.status(400).json({ message: "User not found" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign(
    { userId: user._id, username: user.username },
    process.env.JWT_SECRET, // Directly use the .env variable for JWT secret
    { expiresIn: "1h" }
  );
  res.json({ message: "Logged in successfully", token });
}

async function getMyProfile(req, res) {
  const user = await findUserById(req.user.userId);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
}

module.exports = { register, login, getMyProfile };

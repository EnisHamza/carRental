const express = require("express");
const {
  register,
  login,
  getMyProfile,
} = require("../controllers/authController");
const { authenticateJWT } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/my-profile", authenticateJWT, getMyProfile);

module.exports = router;

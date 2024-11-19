import express from "express";
import User from "../models/User.mjs";

const router = express.Router();

// GET route to fetch all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST route to add a new user
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.send({ message: "User not found" });
    }

    res.send({
      message: "Login successful",
      user: { id: user._id, email: user.email },
    });
  } catch (error) {
    res.send({ message: error.message });
  }
});

export default router;

const express = require("express");
const cors = require("cors");
const { connection } = require("./congfig/db"); // Correct the path to your database configuration
const { userModel } = require("./models/User.model");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

app.post("/post", async (req, res) => {
  try {
    const payload = req.body;

    const newUser = new userModel(payload);
    await newUser.save();
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to home");
});

// for gallery
app.get("/data", async (req, res) => {
  try {
    const displayUsers = await userModel.find();
    res.json(displayUsers);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});





app.listen(PORT, async () => {
  try {
    await connection();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error:", error);
    console.log("Error!!!!! Not connected to MongoDB");
  }
});

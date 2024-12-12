const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect("mongodb+srv://gautam:9507254304@cluster0.1dbzl.mongodb.net/formdata?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};
module.exports = { connection };

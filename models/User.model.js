const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    address: {
        houseNumber: { type: String, required: true },
        policeStation: { type: String, required: true },
        pincode: { type: String, required: true },
        city: { type: String, required: false }, // Populated via API
        state: { type: String, required: false }, // Populated via API
    },
});

const userModel = mongoose.model("user", userSchema);

module.exports = {
    userModel,
};
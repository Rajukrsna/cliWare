const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  points: { type: Number, default: 0 },
  followers: { type: Number, default: 0 },
  badges: { type: Array, default: [] },
  username: { type: String, required: true },
  profileImage: { type: String, default: '/uploads/default-profile.png' }, // Path to profile image
  co2Reduced: [
    {
      date: { type: Date, default: Date.now }, // Date of the CO2 reduction activity
      amount: { type: Number, default: 89, required: true }, // CO2 reduction amount
    },
  ],
});

module.exports = mongoose.model('User', userSchema);

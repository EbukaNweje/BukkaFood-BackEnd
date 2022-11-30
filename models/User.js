const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Unique email for each user
  },
  password: {
    type: String,
    required: true,
  },
  
  isAdmin: {
    // Role of user it will be (normal or admin )
    type: Boolean,
    default: true,
  },

}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User



const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    guid: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      unique: true,
      lowercase: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    create_at: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("user", dataSchema);

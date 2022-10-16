const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    guid: {
      required: true,
      type: String,
    },
    guid_parent: {
      type: String,
      default:""
    },
    name: {
      required: true,
      type: String,
    },
    level: {
      type: Number,
      default:0
    },
    member_code: {
      type: Number,
      default:0
    },
    bonus: {
      type: Number,
      default:0
    },
    create_at: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("member", dataSchema);
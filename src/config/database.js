
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Logger = require("../util/logger");
const mongoURL = process.env.MONGO;

const Connection = async () => {
  try {
    mongoose.connect(mongoURL);
    Logger.info("Connection Database Successful");
  } catch (error) {
    Logger.error("Connection Database Error " + error);
  }
};

module.exports = {
  Connection,
};

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const router = express.Router();
const users = require("./user/user");

router.use("/users", users);

module.exports = router;

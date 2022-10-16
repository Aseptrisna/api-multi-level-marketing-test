const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const router = express.Router();
const users = require("./user/user");
const member = require("./member/member");

router.use("/users", users);
router.use("/member", member);

module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../../controller/user_controller");
const VerifyToken = require("../../midlleware/verify_token");

router.post("/signin", userController.UserLogin);

module.exports = router;

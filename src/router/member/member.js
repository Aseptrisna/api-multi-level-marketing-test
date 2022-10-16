const express = require("express");
const router = express.Router();
const MemberController = require("../../controller/member_controller");
const VerifyToken = require("../../midlleware/verify_token");

router.post("/create",VerifyToken.VerifyToken, MemberController.MemberCreate);
router.get("/get",VerifyToken.VerifyToken, MemberController.GetAllMember);
router.post("/migrate",VerifyToken.VerifyToken, MemberController.MigrationMember);
module.exports = router;

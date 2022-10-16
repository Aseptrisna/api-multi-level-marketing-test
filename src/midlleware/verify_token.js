const jwt = require("jsonwebtoken");
const { requestResponse } = require("../util");
const dotenv = require("dotenv");
let response;
dotenv.config();

const VerifyToken = async (req, res, next) => {
  const token = req.headers[process.env.HEADERS];
  if (!token)
    return res
      .status(403)
      .send({ status: false, message: "No token provided" });
  jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ status: false, message: "Failed to authenticate token !" });
    next();
  });
};

const JwtSign = async (data) => {
  const token = jwt.sign({ guid: data.guid }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
  return token;
};
module.exports = {
  VerifyToken,
  JwtSign,
};

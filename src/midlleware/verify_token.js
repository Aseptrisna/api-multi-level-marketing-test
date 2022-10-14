const jwt = require("jsonwebtoken");
const { requestResponse } = require("../util");
const dotenv = require("dotenv");
let response;
dotenv.config();

const VerifyToken = async (req, res, next) => {
  const token = req.headers[process.env.HEADERS];
  if (!token) response = { ...requestResponse.not_token };
  return res.status(response.code).json(response);
  jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
    if (err) response = { ...requestResponse.token_invalid };
    return res.status(response.code).json(response);
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

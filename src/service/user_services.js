const models = require("../model/user_models");
const { requestResponse, getRndInteger } = require("../util");
const uuid = require("uuid");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const token = require("../midlleware/verify_token");

const UserLogin = async (data) => {
  try {
    const User = await FindUserByEmail(data.email);
    if (User === null) {
      return requestResponse.invalid_login;
    } else {
      const jwtToken = await token.JwtSign(User);
      const matchPassword = await bcrypt.compareSync(
        data.password,
        User.password
      );
      if (!matchPassword) {
        return { ...requestResponse.invalid_login };
      } else {
        return { ...requestResponse.success, token:jwtToken };
      }
    }
  } catch (error) {
    return { ...requestResponse.server_error };
  }
};

const FindUserByEmail = async (email) => {
  return models.findOne({ email: email });
};

module.exports = { UserLogin };

let response;
const UserService = require("../service/user_services");
const Logger = require("../util/logger");
const { requestResponse } = require("../util");

const UserLogin = async (req, res) => {
  const data = req.body;
  try {
    const userlogin = await UserService.UserLogin(data);
    response = { ...userlogin };
  } catch (error) {
    response = { ...requestResponse.invalid_login };
  }
  res.status(response.code).json(response);
};

module.exports = {
  UserLogin,
};

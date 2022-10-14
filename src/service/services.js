require("dotenv").config();
const uuid = require("uuid");
const models = require("../model/member_models");
const { requestResponse } = require("../util/");

const AddMember = async (data) => {
  try {
    data.guid = uuid.v4();
    await models.create(data);
    return (response = { ...requestResponse.success });
  } catch (error) {
    return (response = { ...requestResponse.server_error });
  }
};

const GetMember = async (data) => {
  try {
  } catch (error) {
    return (response = { ...requestResponse.server_error });
  }
};
const GetParent = async (data) => {
  try {
  } catch (error) {
    return (response = { ...requestResponse.server_error });
  }
};
module.exports = { AddMember, GetMember, GetParent };

let response;
const MemberService = require("../service/services");
const Logger = require("../util/logger");
const { requestResponse } = require("../util");

const MemberCreate = async (req, res) => {
  const data = req.body;
  try {
    const member = await MemberService.AddMember(data);
    response = { ...member };
  } catch (error) {
    response = { ...requestResponse.error_response };
  }
  res.status(response.code).json(response);
};
const GetAllMember = async (req, res) => {
  const data = req.body;
  try {
    const member = await MemberService.GetAllMember(data);
    response = { ...member };
  } catch (error) {
    response = { ...requestResponse.error_response };
  }
  res.status(response.code).json(response);
};
const MigrationMember = async (req, res) => {
    const data = req.body;
    try {
      const member = await MemberService.MigrationMember(data);
      response = { ...member };
    } catch (error) {
      response = { ...requestResponse.error_response };
    }
    res.status(response.code).json(response);
  };

module.exports = {
  MemberCreate,
  GetAllMember,
  MigrationMember
};

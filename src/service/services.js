require("dotenv").config();
const uuid = require("uuid");
const models = require("../model/member_models");
const { requestResponse, getRndInteger } = require("../util/");

const AddMember = async (data) => {
  const { guid_parent } = data;
  try {
    const member = await FindMember(guid_parent);
    if (member == null) {
      data.level = 1;
      data.member_code = getRndInteger();
      data.guid = uuid.v4();
      await models.create(data);
      return (response = { ...requestResponse.success });
    } else {
      data.level = member.level + 1;
      data.guid = uuid.v4();
      data.member_code =getRndInteger();
      const create = await models.create(data);
      if (create) {
        const guid_parent = member.guid_parent;
        const parent = await FindMemberParent(guid_parent);
        const update_parent = await models.findOneAndUpdate(
          { guid: member.guid },
          { bonus: member.bonus + 1 }
        );
        if (parent == null) {
          return (response = { ...requestResponse.success });
        } else {
          if (update_parent) {
            await models.findOneAndUpdate(
              { guid: parent.guid },
              { bonus: parent.bonus + 0.5 }
            );
            return (response = { ...requestResponse.success });
          } else {
            return (response = { ...requestResponse.server_error });
          }
        }
      } else {
        return (response = { ...requestResponse.server_error, error });
      }
    }
  } catch (error) {
    return (response = { ...requestResponse.server_error });
  }
};

const GetAllMember = async (data) => {
  try {
    const member = await models.find();
    return (response = { ...requestResponse.success, member });
  } catch (error) {
    return (response = { ...requestResponse.server_error });
  }
};

const MigrationMember = async (data) => {
  const { guid, guid_parent } = data;
  try {
    const members = await FindMember(guid);
    const parents = await FindMemberParent(guid_parent);
    if (members == null) {
      return (response = { ...requestResponse.server_error });
    } else {
      if(parents == null) {
        await models.findOneAndUpdate(
          { guid: guid },
          { guid_parent: guid_parent, level: 1 }
        );
        return (response = { ...requestResponse.success });
      }else{
        await models.findOneAndUpdate(
          { guid: guid },
          { guid_parent: guid_parent, level: parents.level + 1 }
        );
        return (response = { ...requestResponse.success });
      }
    }
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

const FindMember = async (guid) => {
  return models.findOne({ guid: guid });
};

const FindMemberParent = async (guid) => {
  return models.findOne({ guid: guid });
};
module.exports = { AddMember, GetAllMember, GetParent,MigrationMember };

const { updateError } = require("../../helpers");
const { Session } = require("../../models");

const logoutUser = async (sid) => {
  try {
    await Session.findByIdAndRemove(sid);
    return;
  } catch (error) {
    throw updateError(400, error);
  }
};

module.exports = logoutUser;

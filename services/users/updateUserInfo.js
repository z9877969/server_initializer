const { createError, passwordTools, updateError } = require("../../helpers");
const { User } = require("../../models");

const updateUserInfo = async (user, body) => {
  try {
    if (body.password) {
      const isPasswordCompare = await passwordTools.compare(
        body.oldPassword,
        user.password
      );
      if (!isPasswordCompare) {
        throw createError(403);
      }
      const hashedPassword = await passwordTools.hash(body.password);
      body.password = hashedPassword;
    }
    const updatedInfo = await User.findByIdAndUpdate(user._id, body, {
      new: true,
      select: "-createdAt -password -updatedAt",
    });
    return updatedInfo;
  } catch (error) {
    throw error;
  }
};

module.exports = updateUserInfo;

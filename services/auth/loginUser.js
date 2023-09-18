const { createError, passwordTools, tokenTools } = require("../../helpers");
const { User, Session } = require("../../models");

const loginUser = async (body) => {
  try {
    const user = await User.findOne({ email: body.email });

    const isPasswordsCompare = user
      ? await passwordTools.compare(body.password, user.password)
      : null;

    if (!user || !isPasswordsCompare) {
      throw createError(403, "Email doesn't exist / Password is wrong");
    }

    const { _id: sid } = await Session.create({ uid: user._id });

    const { _id, email, gender, name, avatarUrl, waterRate } = user;

    const { accessToken, refreshToken } = tokenTools.createTokens({
      id: user._id,
      sid,
    });

    return {
      user: { _id, email, gender, name, avatarUrl, waterRate },
      sid,
      accessToken,
      refreshToken,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = loginUser;

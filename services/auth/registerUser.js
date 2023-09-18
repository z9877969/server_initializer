const { createError, updateError, passwordTools } = require("../../helpers");
const { User } = require("../../models");

const registerUser = async (body) => {
  try {
    const user = await User.findOne({ email: body.email });

    if (user) {
      throw createError(409, "Email in use");
    }

    const hashedPassword = await passwordTools.hash(body.password);
    body.password = hashedPassword;

    const { _id, email, name } = await User.create({
      ...body,
      password: hashedPassword,
    });

    return { _id, email, name };
  } catch (error) {
    throw updateError(400, error);
  }
};

module.exports = registerUser;

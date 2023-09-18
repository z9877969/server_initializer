const { User } = require("../../models");

const updateWaterRate = async (user, body) => {
  try {
    const waterRate = await User.findByIdAndUpdate(user._id, body, {
      new: true,
      select: "waterRate -_id",
    });

    return waterRate;
  } catch (error) {
    throw error;
  }
};

module.exports = updateWaterRate;

const { filesTools, createError } = require("../../helpers");
const { User } = require("../../models");

const updateUserAvatar = async (user, file) => {
  try {
    const { originalname, path: tmpDir } = file;

    const newFileName = filesTools.createNewFileName(originalname, user._id);

    const avatarUrl = filesTools.getNewAvatarUrl(newFileName);

    try {
      const updatedAvatarUrl = await User.findByIdAndUpdate(
        user._id,
        {
          avatarUrl,
        },
        { new: true, select: "avatarUrl -_id" }
      );

      const newAvatarFileName = filesTools.getAvatarFilePath(newFileName);

      await filesTools.resizeAndReplaceImageFile(tmpDir, newAvatarFileName);

      return updatedAvatarUrl;
    } catch (error) {
      await filesTools.clearTmp(tmpDir);
      throw createError(400, error.message);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = updateUserAvatar;

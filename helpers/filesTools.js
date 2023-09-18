const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "../", "public", "avatar");
const tmpDir = path.join(__dirname, "../", "tmp");

const getFileExtension = (fileName) => fileName.split(".").reverse()[0];

const createNewFileName = (oldFileName, newFileName) => {
  const extension = getFileExtension(oldFileName);
  return newFileName + "." + extension;
};

const clearTmp = async (oldFilePath) => {
  await fs.rm(oldFilePath);
};

const getAvatarFilePath = (newFileName) => path.join(avatarDir, newFileName);

const getNewAvatarUrl = (newFileName) => path.join("/avatar", newFileName);

const resizeAndReplaceImageFile = async (oldFilePath, newFilePath) => {
  Jimp.read(oldFilePath, (err, avatar) => {
    if (err) {
      throw err;
    }
    avatar
      .resize(250, 250) // resize
      .quality(60) // set JPEG quality
      .write(newFilePath); // save
  });
  await fs.rm(oldFilePath);
};

module.exports = {
  getFileExtension,
  createNewFileName,
  clearTmp,
  getNewAvatarUrl,
  getAvatarFilePath,
  resizeAndReplaceImageFile,
  dirPath: {
    avatar: avatarDir,
    tmp: tmpDir,
  },
};

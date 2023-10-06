require("dotenv").config();

module.exports = {
  DB_HOST: process.env.DB_HOST,
  ACCESS_SECRET_KEY: process.env.ACCESS_SECRET_KEY,
  REFRESH_SECRET_KEY: process.env.REFRESH_SECRET_KEY,
  CLOUD_NAME: process.env.CLOUD_NAME,
  CLOUD_API_KEY: process.env.CLOUD_API_KEY,
  CLOUD_API_SECRET: process.env.CLOUD_API_SECRET,
  AVATAR_DIR_NAME: process.env.AVATAR_DIR_NAME,
};

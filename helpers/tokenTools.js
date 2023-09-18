const jwt = require("jsonwebtoken");
const { createError, updateError } = require("./error");

require("dotenv").config();

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const create = (payload, secretKey, expiresIn) => {
  const token = jwt.sign(payload, secretKey, { expiresIn });
  return token;
};

const verify = async (token, secretKey) => {
  try {
    return await jwt.verify(token, secretKey);
  } catch (error) {
    throw createError(401, "Not authorized");
  }
};

const createAccessToken = (payload) => {
  return create(payload, ACCESS_SECRET_KEY, "1h");
};

const createRefreshToken = (payload) => {
  return create(payload, REFRESH_SECRET_KEY, "24h");
};

const verifyAccessToken = async (token) => {
  try {
    return await verify(token, ACCESS_SECRET_KEY);
  } catch (error) {
    throw updateError(404, error);
  }
};

const verifyRefreshToken = async (token) => {
  try {
    return await verify(token, REFRESH_SECRET_KEY);
  } catch (error) {
    throw updateError(404, error);
  }
};

const createTokens = (payload) => {
  return {
    accessToken: createAccessToken(payload),
    refreshToken: createRefreshToken(payload),
  };
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  createTokens,
};

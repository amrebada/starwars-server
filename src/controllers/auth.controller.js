import { compareSync, hashSync } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import utils from "../utils";
import config from "../config";

const { apiError, ErrorTypes } = utils;
const users = [];

const generateFullToken = email => {
  const accessToken = sign({ email }, config.TOKEN_SECRET, {
    expiresIn: "1h"
  });
  const refreshToken = sign({ email }, config.REFRESH_SECRET, {
    expiresIn: "30d"
  });

  return {
    accessToken,
    refreshToken
  };
};

const login = (email, password) => {
  const user = users.find(v => v.email === email);
  if (!user) {
    throw apiError(ErrorTypes.NOT_FOUND, " this user not signed up");
  }

  if (!compareSync(password, user.password)) {
    throw apiError(ErrorTypes.NOT_AUTHORIZED, "wrong credentials");
  }

  return generateFullToken(email);
};

const signUp = (email, password, cpassword) => {
  const user = users.find(v => v.email === email);
  if (user) {
    throw apiError(ErrorTypes.CONFLICT, " this user signed up before");
  }
  if (password !== cpassword) {
    throw apiError(ErrorTypes.BAD_REQUEST, "password not matched");
  }
  const hash = hashSync(password, 10);

  users.push({
    email,
    password: hash
  });

  return generateFullToken(email);
};

const refresh = refreshToken => {
  const payload = verify(refreshToken, config.REFRESH_SECRET);
  const newAccessToken = sign(payload, config.TOKEN_SECRET, {
    expiresIn: "1h"
  });
  return {
    accessToken: newAccessToken,
    refreshToken
  };
};

const verifyUser = token => {
  const payload = verify(token, config.TOKEN_SECRET);
  const user = users.find(v => v.email === payload.email);
  if (!user) {
    return false;
  }
  return true;
};

export default {
  login,
  signUp,
  refresh,
  verifyUser
};

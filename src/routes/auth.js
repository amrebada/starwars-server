/* eslint-disable consistent-return */
import { Router } from "express";
import utils from "../utils";
import controller from "../controllers/auth.controller";

const router = Router();
const { apiError, apiResponse, ErrorTypes, getToken } = utils;
const { login, signUp, refresh, verifyUser } = controller;

router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw apiError(ErrorTypes.BAD_REQUEST, "email or password not passed");
    }

    const token = login(email, password);

    return res.json(apiResponse(token));
  } catch (error) {
    res.json(apiResponse(null, error));
  }
});

router.post("/signup", (req, res) => {
  try {
    const { email, password, cpassword } = req.body;

    if (!email || !password || !cpassword) {
      throw apiError(
        ErrorTypes.BAD_REQUEST,
        "email , password or cpassword params not found"
      );
    }
    const token = signUp(email, password, cpassword);
    return res.json(apiResponse(token));
  } catch (error) {
    res.json(apiResponse(null, error));
  }
});

router.get("/token", (req, res) => {
  try {
    const { refreshToken } = req.query;

    if (!refreshToken) {
      throw apiError(ErrorTypes.BAD_REQUEST, "refreshToken param not found");
    }
    const token = refresh(refreshToken);
    return res.json(apiResponse(token));
  } catch (error) {
    res.json(apiResponse(null, error));
  }
});
router.use("/graphql", (req, res, next) => {
  try {
    const token = getToken(req.headers);

    if (!token) {
      throw apiError(ErrorTypes.FORBIDDEN, "access token is not correct");
    }
    const isUser = verifyUser(token);
    if (!isUser) {
      throw apiError(
        ErrorTypes.NOT_AUTHORIZED,
        "access token is expired or not correct"
      );
    }
    next();
  } catch (error) {
    res.json(apiResponse(null, error));
  }
});

export default router;

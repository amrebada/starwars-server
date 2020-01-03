import { config } from "dotenv";

config();

export default {
  PORT: process.env.PORT || 5000,
  DB_URL: process.env.DB_URL || "",
  TOKEN_SECRET: process.env.TOKEN_SECRET || "",
  REFRESH_SECRET: process.env.REFRESH_SECRET || ""
};

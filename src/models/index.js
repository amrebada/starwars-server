import { connect } from "mongoose";
import config from "../config";

export default () => {
  return new Promise((resolve, reject) => {
    connect(
      config.DB_URL,
      err => {
        if (err) {
          return reject(err);
        }
        return resolve();
      }
    );
  });
};

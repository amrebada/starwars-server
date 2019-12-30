/* eslint-disable new-cap */
import { Schema, model } from "mongoose";

const starships = new Schema({
  id: Schema.Types.Number,
  MGLT: Schema.Types.String,
  hyperdrive_rating: Schema.Types.String,
  pilots: [Schema.Types.Number],
  starship_class: Schema.Types.String
});

export default new model("starships", starships);

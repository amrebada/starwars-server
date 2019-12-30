/* eslint-disable new-cap */
import { Schema, model } from "mongoose";

const transports = new Schema({
  id: Schema.Types.Number,
  cargo_capacity: Schema.Types.String,
  consumables: Schema.Types.String,
  cost_in_credits: Schema.Types.String,
  created: Schema.Types.String,
  crew: Schema.Types.String,
  edited: Schema.Types.String,
  length: Schema.Types.String,
  manufacturer: Schema.Types.String,
  max_atmospering_speed: Schema.Types.String,
  model: Schema.Types.String,
  name: Schema.Types.String,
  passengers: Schema.Types.String
});

export default new model("transports", transports);

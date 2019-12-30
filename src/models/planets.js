/* eslint-disable new-cap */
import { Schema, model } from "mongoose";

const planets = new Schema({
  id: Schema.Types.Number,
  climate: Schema.Types.String,
  created: Schema.Types.String,
  diameter: Schema.Types.String,
  edited: Schema.Types.String,
  gravity: Schema.Types.String,
  name: Schema.Types.String,
  orbital_period: Schema.Types.String,
  population: Schema.Types.String,
  rotation_period: Schema.Types.String,
  surface_water: Schema.Types.String,
  terrain: Schema.Types.String
});

export default new model("planets", planets);

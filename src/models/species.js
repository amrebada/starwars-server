/* eslint-disable new-cap */
import { Schema, model } from "mongoose";

const species = new Schema({
  id: Schema.Types.Number,
  average_height: Schema.Types.String,
  average_lifespan: Schema.Types.String,
  classification: Schema.Types.String,
  created: Schema.Types.String,
  designation: Schema.Types.String,
  edited: Schema.Types.String,
  eye_colors: Schema.Types.String,
  hair_colors: Schema.Types.String,
  homeworld: Schema.Types.Number,
  language: Schema.Types.String,
  name: Schema.Types.String,
  people: [Schema.Types.Number],
  skin_colors: Schema.Types.String
});

export default new model("species", species);

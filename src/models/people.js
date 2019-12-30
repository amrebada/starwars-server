/* eslint-disable new-cap */
import { Schema, model } from "mongoose";

const people = new Schema({
  id: Schema.Types.Number,
  birth_year: Schema.Types.String,
  created: Schema.Types.String,
  edited: Schema.Types.String,
  eye_color: Schema.Types.String,
  gender: Schema.Types.String,
  hair_color: Schema.Types.String,
  height: Schema.Types.String,
  homeworld: Schema.Types.Number,
  mass: Schema.Types.String,
  name: Schema.Types.String,
  skin_color: Schema.Types.String
});

export default new model("people", people);

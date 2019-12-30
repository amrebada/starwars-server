/* eslint-disable new-cap */
import { Schema, model } from "mongoose";

const vehicles = new Schema({
  id: Schema.Types.Number,
  pilots: [Schema.Types.Number],
  vehicle_class: Schema.Types.String
});

export default new model("vehicles", vehicles);

/* eslint-disable new-cap */
import { Schema, model } from "mongoose";

const films = new Schema({
  id: Schema.Types.Number,
  characters: [Schema.Types.Number],
  created: Schema.Types.String,
  director: Schema.Types.String,
  edited: Schema.Types.String,
  episode_id: Schema.Types.Number,
  opening_crawl: Schema.Types.String,
  planets: [Schema.Types.Number],
  producer: Schema.Types.String,
  release_date: Schema.Types.String,
  species: [Schema.Types.Number],
  starships: [Schema.Types.Number],
  title: Schema.Types.String,
  vehicles: [Schema.Types.Number]
});

export default new model("films", films);

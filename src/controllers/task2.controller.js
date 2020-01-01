/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { connection } from "mongoose";
import films from "../models/films";

export const MostAppearedCharacter = async () => {
  const allFilms = await films.find({});
  let characters = [];
  for (const film of allFilms) {
    characters = [...characters, ...film.characters];
  }
  const count = {};
  for (const character of characters) {
    count[character] = (count[character] || 0) + 1;
  }
  let mostCharacter = { max: 0, id: -1 };
  for (const key in count) {
    if (count[key] > mostCharacter.max) {
      mostCharacter = { max: count[key], id: parseInt(key) };
    }
  }
  const people = await connection.db
    .collection("people")
    .findOne({ id: mostCharacter.id });

  return people.name;
};

/* eslint-disable no-nested-ternary */
/* eslint-disable guard-for-in */
/* eslint-disable no-await-in-loop */
/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { connection } from "mongoose";

const getSpeciesCharacterNumber = (speciesPeople = [], people = {}) => {
  let characterNumber = 0;
  for (const person of speciesPeople) {
    characterNumber += people[person];
  }
  return characterNumber;
};

const sortHashMap = (map = {}) => {
  const array = [];
  for (const key in map) {
    array.push({
      name: key,
      value: map[key]
    });
  }

  return array.sort((a, b) => {
    return a.value.total > b.value.total
      ? -1
      : b.value.total > a.value.total
      ? 1
      : 0;
  });
};

const getPeople = (all = {}, peopleSpecies = []) => {
  return peopleSpecies.map(person => all[person]);
};

export const MostAppearedSpecies = async () => {
  let characters = [];
  await connection.db
    .collection("films")
    .find({})
    .forEach(doc => {
      characters = [...characters, ...doc.characters];
    });

  const count = {};
  for (const character of characters) {
    count[character] = (count[character] || 0) + 1;
  }
  const people = {};
  await connection.db
    .collection("people")
    .find({ id: { $in: Array.from(new Set(characters)) } })
    .map(doc => ({ name: doc.name, id: doc.id }))
    .forEach(doc => {
      people[doc.id] = doc.name;
    });

  const species = {};
  await connection.db
    .collection("species")
    .find({ people: { $in: [...characters] } })
    .forEach(doc => {
      species[doc.name] = {
        total: getSpeciesCharacterNumber(doc.people, count),
        people: getPeople(people, doc.people)
      };
    });

  return sortHashMap(species);
};

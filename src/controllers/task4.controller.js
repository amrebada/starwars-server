/* eslint-disable no-nested-ternary */
/* eslint-disable guard-for-in */
/* eslint-disable no-await-in-loop */
/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import { connection } from "mongoose";

export const MostPlanetHasPilots = async () => {
  // 1- get all vehicles
  // 2- extract pilots no-dublicate
  let pilots = [];
  await connection.db
    .collection("vehicles")
    .find({})
    .forEach(v => pilots.push(...v.pilots));

  pilots = Array.from(new Set(pilots));
  // 3- get all pilots
  const people = [];
  await connection.db
    .collection("people")
    .find({ id: { $in: pilots } })
    .forEach(person => people.push(person));
  // 4- get species of pilots
  await connection.db
    .collection("species")
    .find({})
    .forEach(species => {
      for (const p of species.people) {
        const i = people.findIndex(v => v.id === p);
        if (i !== -1) {
          people[i] = { ...people[i], species };
        }
      }
    });
  // 5- now I have pilot-species
  const homeworlds = Array.from(new Set(people.map(p => p.homeworld)));
  // 6- get planets of pilots
  const planets = [];
  await connection.db
    .collection("planets")
    .find({ id: { $in: homeworlds } })
    .forEach(homeworld => {
      const myPeople = people.filter(p => p.homeworld === homeworld.id);
      planets.push({
        name: homeworld.name,
        value: {
          total: myPeople.length,
          people: [
            ...myPeople.map(mp => ({
              name: mp.name,
              species: mp.species && mp.species.name
            }))
          ]
        }
      });
    });

  // 7- count by planets
  // 8- return list
  return planets.sort((a, b) =>
    a.value.total > b.value.total ? -1 : b.value.total > a.value.total ? 1 : 0
  );
};

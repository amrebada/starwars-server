import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt
} from "graphql";
import { MostPlanetHasPilots } from "../controllers/task4.controller";

const peopleSpecies = new GraphQLObjectType({
  name: "peopleSpecies",
  fields: {
    name: {
      type: GraphQLString
    },
    species: {
      type: GraphQLString
    }
  }
});

const planetPeopleType = new GraphQLObjectType({
  name: "planetPeople",
  fields: {
    total: { type: GraphQLInt },
    people: { type: GraphQLList(peopleSpecies) }
  }
});

const planetsType = new GraphQLObjectType({
  name: "planets",
  fields: {
    name: {
      type: GraphQLString
    },
    value: {
      type: planetPeopleType
    }
  }
});

export default {
  MostPlanetHasPilots: {
    type: GraphQLList(planetsType),
    resolve: MostPlanetHasPilots
  }
};

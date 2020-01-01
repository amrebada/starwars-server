import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt
} from "graphql";
import { MostAppearedSpecies } from "../controllers/task3.controller";

const peopleType = new GraphQLObjectType({
  name: "people",
  fields: {
    total: { type: GraphQLInt },
    people: { type: GraphQLList(GraphQLString) }
  }
});

const speciesType = new GraphQLObjectType({
  name: "species",
  fields: {
    name: {
      type: GraphQLString
    },
    value: {
      type: peopleType
    }
  }
});

export default {
  MostAppearedSpecies: {
    type: GraphQLList(speciesType),
    resolve: MostAppearedSpecies
  }
};

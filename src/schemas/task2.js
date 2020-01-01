import { GraphQLString } from "graphql";
import { MostAppearedCharacter } from "../controllers/task2.controller";

export default {
  MostAppearedCharacter: {
    type: GraphQLString,
    resolve: MostAppearedCharacter
  }
};

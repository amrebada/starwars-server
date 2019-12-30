import { GraphQLString } from "graphql";
import { getLongestOpeningCredit } from "../controllers/task1.controller";

export default {
  longestOpeningCredits: {
    type: GraphQLString,
    resolve: getLongestOpeningCredit
  }
};

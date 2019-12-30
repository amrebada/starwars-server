import { GraphQLObjectType, GraphQLSchema } from "graphql";
import task1 from "./task1";

const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: {
    ...task1
  }
});

export default new GraphQLSchema({
  query: rootQuery
});

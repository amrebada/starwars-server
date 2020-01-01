import { GraphQLObjectType, GraphQLSchema } from "graphql";
import task1 from "./task1";
import task2 from "./task2";

const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: {
    ...task1,
    ...task2
  }
});

export default new GraphQLSchema({
  query: rootQuery
});

import { GraphQLObjectType, GraphQLSchema } from "graphql";
import task1 from "./task1";
import task2 from "./task2";
import task3 from "./task3";
import task4 from "./task4";

const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: {
    ...task1,
    ...task2,
    ...task3,
    ...task4
  }
});

export default new GraphQLSchema({
  query: rootQuery
});

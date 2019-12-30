import { GraphQLObjectType, GraphQLSchema } from "graphql";

const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: {}
});

export default new GraphQLSchema({
  query: rootQuery
});

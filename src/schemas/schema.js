import { GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql";

export const greeting = (name) => {
    return `Hello ${name}`
}

const Hello = new GraphQLObjectType({
    name: "helloQuery",
    fields: {
        Hello: {
            type: GraphQLString,
            args:{
                name: {
                    type: GraphQLString
                }
            },
            resolve(parent,args){
                return greeting(args.name);
            }
        }
    }
});


export default new GraphQLSchema({
    query: Hello
})
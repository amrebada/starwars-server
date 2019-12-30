import express from "express";
import graphQlHTTP from "express-graphql";
import schema from "./schemas/schema";

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/graphql",graphQlHTTP({
    schema,
    graphiql:true
}));

app.listen(PORT,()=> console.log(`server running on port ${PORT}`))
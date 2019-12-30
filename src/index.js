import express from "express";
import graphQlHTTP from "express-graphql";
import schema from "./schemas";
import dbInit from "./models/index";
import config from "./config";

const app = express();

app.use(
  "/graphql",
  graphQlHTTP({
    schema,
    graphiql: true,
    customFormatErrorFn: error => error.message
  })
);

dbInit()
  .then(() => {
    app.listen(config.PORT, () => {
      console.log(`server running on port ${config.PORT}`);
    });
  })
  .catch(err => console.error(err));

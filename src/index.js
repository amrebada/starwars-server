import express from "express";
import graphQlHTTP from "express-graphql";
import bodyParser from "body-parser";
import cors from "cors";
import schema from "./schemas";
import dbInit from "./models/index";
import config from "./config";
import auth from "./routes/auth";

const app = express();

app.use(
  cors({
    origin: "*"
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", auth);

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

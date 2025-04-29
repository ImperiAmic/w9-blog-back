import express from "express";
import morgan from "morgan";
import cors from "cors";
import handleHealthCheck from "./middlewares/handleHealthCheck/handleHealthCheck.js";
import handleErrors from "./middlewares/handleErrors/handleErrors.js";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFound/handleEndpointNotFound.js";
import postsRouter from "../post/router/postsRouter.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      const localhostOrigin = "http://localhost";
      const netlifyOrigin = "w9-blog-front.netlify.app";

      if (!origin) {
        return callback(null, true);
      }

      if (
        origin.startsWith(localhostOrigin) ||
        origin.endsWith(netlifyOrigin)
      ) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"), false);
    },
    credentials: true,
  }),
);

app.get("/", handleHealthCheck);

app.use("/posts", postsRouter);

app.use(handleEndpointNotFound);
app.use(handleErrors);

export default app;

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
    origin: (corsOrigin, callback) => {
      if (!corsOrigin) {
        return callback(null, true);
      }

      const allowedOrigins = process.env.ALLOWED_ORIGINS.split(",");

      const isOriginAllowed = allowedOrigins.some((origin) =>
        corsOrigin?.includes(origin),
      );

      if (isOriginAllowed) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS policy"), false);
    },
    credentials: true,
  }),
);

app.get("/", handleHealthCheck);

app.use("/posts", postsRouter);

app.use(handleEndpointNotFound);
app.use(handleErrors);

export default app;

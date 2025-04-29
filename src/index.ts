import "dotenv/config";
import startServer from "./server/startServer.js";
import connectToDatabase from "./database/connectToDatabase.js";

const port = process.env.PORT ?? 3001;

await connectToDatabase(
  "mongodb+srv://raimontxollo:negri6000@cluster0.hojql6o.mongodb.net/blog2",
);
startServer(port);

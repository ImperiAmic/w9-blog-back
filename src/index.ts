import "dotenv/config";
import startServer from "./server/startServer.js";
import connectToDatabase from "./database/connectToDatabase.js";

const port = process.env.PORT ?? 3001;
const databaseConnectionString = process.env.DATABASE_CONNECTION_STRING;

await connectToDatabase(databaseConnectionString);
startServer(port);

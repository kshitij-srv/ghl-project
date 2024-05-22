import { setup } from "./src/app";
import MongoDBInstance from "./src/databases/MongoDB/db";

MongoDBInstance?.connect();

const PORT = process.env.PORT ? parseInt(process.env.PORT as string, 10) : undefined;
const HOST = process.env.HOST ? process.env.HOST as string : undefined;

setup({
    port: PORT,
    host: HOST,
});
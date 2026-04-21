import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
/*
const env = {
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT),
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  ssl: { rejectUnauthorized: false },
};
*/
const env1 = {
  host: process.env.PG_HOST1,
  port: parseInt(process.env.PG_PORT1),
  database: process.env.PG_DATABASE1,
  user: process.env.PG_USER1,
  password: process.env.PG_PASSWORD1,
  ssl: { rejectUnauthorized: false },
};
/*
const env2 = {
  host: process.env.PG_HOST2,
  port: parseInt(process.env.PG_PORT2),
  database: process.env.PG_DATABASE2,
  user: process.env.PG_USER2,
  password: process.env.PG_PASSWORD2,
  ssl: { rejectUnauthorized: false },
};
*/
export async function connect() {
  const client = new pg.Client(env1);
  await client.connect();
  return client;
}

export function pool() {
  return new pg.Pool(env1);
}

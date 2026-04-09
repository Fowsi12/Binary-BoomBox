import express from "express";
import { pool } from "../db/connect.js";

const db = pool();

const port = 5432;
const server = express();
server.use(express.static("frontend"));
server.use(onEachRequest);

function onEachRequest(request, response, next) {
  console.log(new Date(), request.method, request.url);
  next();
}

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

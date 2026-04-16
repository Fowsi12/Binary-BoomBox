import express from "express";
import { pool } from "../db/connect.js";

const db = pool();

console.log("Testing database connection...");
const port = 5432;
const server = express();
server.use(express.static("frontend"));
server.use(onEachRequest);
server.listen(port, onServerReady);
  
function onServerReady() {
  console.log("Webserver running on port", port);
}

function onEachRequest(request, response, next) {
  console.log(new Date(), request.method, request.url);
  next();
}
const path = require("path");
require("dotenv").config({
  override: true,
  path: path.join(__dirname, "development.env"),
});

const express = require("express");
const { Pool, Client } = require("pg");
// Constants
const PORT = 4000;
const HOST = "localhost";
// App
const app = express();

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PG_PORT,
});

client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => {
  res.send("Hello World App");
});

app.listen(PORT, (req, res) => {
  console.log(`Sever Running on http://${HOST}:${PORT}`);
});

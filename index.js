import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = 3000;

env.config();

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello Jonathan!");
});

app.get("/new", (req, res) => {
  res.send("Welcome, new user!");
});

app.get("/edit", (req, res) => {
  res.send("Stop playing and focus!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");

const routes = require("./router");
const database = require("../src/config/database");

database.Connection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

app.use("/api", routes);
module.exports = app;

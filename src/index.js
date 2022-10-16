const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
const routes = require("./router");
const database = require("../src/config/database");
const morgan = require('morgan');

database.Connection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(express.static("static"));
app.use("/api", routes);
module.exports = app;

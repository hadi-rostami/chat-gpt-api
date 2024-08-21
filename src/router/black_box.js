const express = require("express");
const { blackBoxAi } = require("../controllers");
const route = express.Router();

route.get("/api/black-box", blackBoxAi);

module.exports = route;

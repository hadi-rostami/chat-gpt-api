const express = require("express");
const { chatgptAi , blackBoxAi } = require("../controllers");
const route = express.Router();

route.get("/api/chat-gpt", chatgptAi);

module.exports = route;

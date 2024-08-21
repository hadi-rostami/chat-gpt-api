const express = require("express");
const rateLimit = require("express-rate-limit");
const { chackParametrs } = require("./src/middlewares");

const { chatGptRoute, blackBoxRoute } = require("./src/router");

// instanses
const app = express();

// limiter for requests
const limiter = rateLimit({
  windowMs: 120 * 1000,
  max: 120,
  message: "Too many requests from this IP, please try again later.",
});

// use limiter
app.use(limiter);

// create root chat
app.get("/api/chat-gpt", chackParametrs, chatGptRoute);
app.get("/api/black-box", chackParametrs, blackBoxRoute);

// listen app requests
app.listen(5000, (err) =>
  err ? console.log(err) : console.log("run app in port 5000")
);

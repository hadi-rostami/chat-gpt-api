const { BlackBoxAI } = require("../middlewares");

const Box = new BlackBoxAI("wT0aAYN");

const blackBoxAi = async (req, res) => {
  const { text } = req.query;

  await res.status(200).send({
    status: 200,
    message: await Box.send_message(text),
    creator: "@HadiRostamiYT",
  });
};

module.exports = blackBoxAi;

const { ChatGptAI } = require("../middlewares");

const Gpt = new ChatGptAI();

const chatgptAi = async (req, res) => {
  const { text } = req.query;

  await res.status(200).send({
    status: 200,
    message: await Gpt.request(text),
    creator: "@HadiRostamiYT",
  });
};

module.exports = chatgptAi;

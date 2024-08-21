const axios = require("axios");
require("dotenv").config();

class BlackBoxAI {
  HEADERS = {
    cookie: process.env.COOKIE,
    origin: "https://www.blackbox.ai",
  };

  CHAT_URL = "https://www.blackbox.ai/api/chat";

  constructor(id) {
    this.data_send = {
      messages: [],
      id,
      previewToken: null,
      userId: null,
      codeModelMode: true,
      agentMode: {},
      trendingAgentMode: {},
      isMicMode: false,
      maxTokens: 1024,
      isChromeExt: false,
      githubToken: null,
      clickedAnswer2: false,
      clickedAnswer3: false,
      clickedForceWebSearch: false,
      visitFromDelta: null,
      mobileClient: false,
    };
  }

  create_message = async (content, role) => {
    this.data_send.messages = [{ id: this.data_send.id, content, role }];
  };

  request = async (method, url, data, headers) => {
    try {
      const response = await axios({ method, url, data, headers });
      if (response.status === 200) {
        if (response.data.includes("rv1$@$"))
          return response.data.split("rv1$@$")[1];
        return response.data;
      }
      return "err: " + response.data;
    } catch (err) {
      return "err: " + err;
    }
  };

  send_message = async (text) => {
    await this.create_message(text, "user");

    const response = await this.request(
      "POST",
      this.CHAT_URL,
      this.data_send,
      this.HEADERS
    );

    return response;
  };
}

module.exports = BlackBoxAI;

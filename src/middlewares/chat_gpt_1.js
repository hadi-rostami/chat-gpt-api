const axios = require("axios");

class ChatGptAI {
  URL_CHAT = "https://api.binjie.fun/api/generateStream";

  constructor() {
    this.headers = {
      origin: "https://chat18.aichatos8.com/",
      referer: "https://chat18.aichatos8.com/",
      "content-type": "application/json",
    };

    this.data = {
      userId: "#/chat/1724227332383",
      network: true,
      system: "",
      withoutContext: false,
      stream: false,
    };
  }

  request = async (text) => {
    try {
      const response = await axios.post(
        this.URL_CHAT,
        { ...this.data, prompt: text },
        { headers: this.headers }
      );

      return response.data;
    } catch (err) {
      return "error: " + err;
    }
  };
}

module.exports = ChatGptAI;

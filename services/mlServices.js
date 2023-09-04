const axios = require("axios");

const ENDPOINT_URL = "https://ml-service-sjkdpzr2aq-et.a.run.app";

let mlServices = {
  recognize: async (form) => {
    try {
      const headers = {
        accept: "application/json",
        "Content-Type": "multipart/form-data",
      };
      const res = await axios({
        method: "post",
        url: `${ENDPOINT_URL}/recognize`,
        data: form,
        headers: headers,
      });
      return res;
    } catch (e) {
      return {
        success: false,
        message: e.message,
      };
    }
  },
};

module.exports = mlServices;

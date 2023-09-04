const axios = require("axios");

const ENDPOINT_URL = "https://ml-service-sjkdpzr2aq-et.a.run.app";
const API_KEY_NINJA = "ZhanoMOpXq4KNYFIhzSIOg==lbwZt5sdBDynme5A";

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
  recommend: async (query) => {
    try {
      const headers = {
        accept: "application/json",
      };
      const res = await axios({
        method: "post",
        url: `${ENDPOINT_URL}/recommendation?query=${query}`,
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
  getNutrition: async (query) => {
    try {
      const headers = {
        "X-Api-Key": API_KEY_NINJA,
      };
      const res = await axios({
        method: "get",
        contentType: "application/json",
        url: "https://api.api-ninjas.com/v1/nutrition?query=" + query,
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

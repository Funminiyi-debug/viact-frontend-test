import axios from "axios";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export default axios.create({
  baseUrl: "https://newsapi.org/v2/everything/",
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
});

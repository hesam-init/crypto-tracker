import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
  timeout: 2500,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

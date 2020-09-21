import axios from "axios";
import Constants from "./Constants";

const HTTP = axios.create({
  withCredentials: true,
  responseType: "json",
  responseEncoding: "utf8",
  timeout: 5000,
  baseURL: Constants.SERVER_API,
});

export default HTTP;

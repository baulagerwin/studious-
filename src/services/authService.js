import http from "./httpService";
import config from "../../config.json";

const login = (data) => http.post(config.authEndpoint, data);

export default {
  login,
};

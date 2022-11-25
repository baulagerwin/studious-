import http from "./httpService";
import config from "../../config.json";

const register = (data) => http.post(config.userEndpoint, data);

export default {
  register,
};

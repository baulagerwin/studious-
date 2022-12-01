import http from "./httpService";
import { baseURL } from "../../config.json";

const url = "/users";

function register(data) {
  return http.request({ baseURL, url, method: "post", data });
}

export default {
  register,
};

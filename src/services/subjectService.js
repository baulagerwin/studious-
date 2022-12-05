import http from "./httpService";
import { baseURL } from "../../config.json";

const url = "/subjects";

function initSubject(data) {
  return http.request({ baseURL, url, method: "post", data });
}

export default {
  initSubject,
};

import http, { setJwt } from "./httpService";
import { baseURL } from "../../config.json";
import jwtDecode from "jwt-decode";

const url = "/auth";
const token = "studious_token";

async function login(data) {
  setJwt(getToken());
  const response = await http.request({ baseURL, url, method: "post", data });
  localStorage.setItem(token, response.data);
}

function loginWithJwt(jwt) {
  setJwt(getToken());
  localStorage.setItem(token, jwt);
}

function getCurrentUser() {
  setJwt(getToken());
  const jwt = localStorage.getItem(token);
  return jwtDecode(jwt);
}

function logout() {
  localStorage.removeItem(token);
}

function getToken() {
  return localStorage.getItem(token);
}

export default {
  login,
  loginWithJwt,
  getCurrentUser,
  logout,
  getToken,
};

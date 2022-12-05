import http, { setJwtInHeader } from "./httpService";
import { baseURL } from "../../config.json";
import jwtDecode from "jwt-decode";

const url = "/auth";
const token = "studious_token";

async function login(data) {
  const response = await http.request({ baseURL, url, method: "post", data });
  localStorage.setItem(token, response.data);
  setJwtInHeader(response.data);
}

function loginWithJwt(jwt) {
  localStorage.setItem(token, jwt);
  setJwtInHeader(jwt);
}

function getCurrentUser() {
  const jwt = localStorage.getItem(token);
  setJwtInHeader(jwt);
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

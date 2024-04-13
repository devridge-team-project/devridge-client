import { SignInRequest } from "@/interface";
import httpRequest from "../axios";

const api = httpRequest.server;

function login(data: SignInRequest) {
  return api.post("/api/login", data);
}

function logout() {
  return api.post("/api/logout");
}

const sign = {
  in: login,
  out: logout,
};

export default sign;

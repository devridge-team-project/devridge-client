import {
  SignInRequest,
  SocialLoginRequest,
  SocialLoginResponse,
} from "@/interface";
import httpRequest from "../axios";

const api = httpRequest.server;

function login(data: SignInRequest) {
  return api.post("/api/login", data);
}

function logout() {
  return api.post("/api/logout");
}
function signUpAuth(data: any) {
  return api.post("/social-login/signUp", data);
}
function createToken(provider: string, code: string) {
  return api.post<SocialLoginRequest, Partial<SocialLoginResponse>>(
    "/api/social-login",
    {
      provider,
      code,
    }
  );
}
function refresh() {
  return api.get("api/auth/accessToken");
}

function _delete(password: string) {
  return api.delete("api/users", { data: { password } });
}

const sign = {
  up: signUpAuth,
  in: login,
  out: logout,
  auth: createToken,
  refresh,
  delete: _delete,
};

export default sign;

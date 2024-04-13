import httpRequest from "../axios";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
}

const api = httpRequest.server;
export const login = ({ email, password }: LoginRequest) => {
  return api.post<LoginRequest, LoginResponse>("api/login", {
    email,
    password,
  });
};

export const deleteAccount = (password: string) => {
  return api.delete("api/users", { data: { password } });
};

export const refresh = () => {
  return api.get<LoginResponse>("api/auth/accessToken");
};

export const logout = () => {
  return api.post("api/logout");
};

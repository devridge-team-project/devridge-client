import { User } from "@/interface";
import httpRequest from "../axios";

const api = httpRequest.server;

function getUser() {
  return api.get<User>("/api/users/details");
}

const changePassword = (password: string) => {
  return api.patch("api/users/password", { password });
};

function patchUser(data: FormData) {
  return api.patchFormData("/api/users", data);
}

const userApi = {
  get: getUser,
  patch: patchUser,
  patchPassword: changePassword,
};
export default userApi;

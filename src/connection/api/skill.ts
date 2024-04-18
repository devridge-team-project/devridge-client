import { Skill } from "@/interface";
import httpRequest from "../axios";

const api = httpRequest.server;

function getSkills() {
  return api.get<Skill[]>("/api/skills");
}

const skillApi = {
  getAll: getSkills,
};

export default skillApi;

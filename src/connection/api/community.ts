import httpRequest from "../axios";
import { Community } from "@/interface";

const api = httpRequest.server;

function getCommunities() {
  return api.get<Community[]>("/api/community");
}

function getCommunity(id: number) {
  return api.get<Community>(`/api/community/${id}`);
}

function getProjects() {
  return api.get(`/api/community/projects`);
}

function getProject(id: number) {
  return api.get(`/api/community/projects/${id}`);
}

const communityApi = {
  getAll: getCommunities,
  get: getCommunity,
  project: {
    getAll: getProjects,
    get: getProject,
  },
};

export default communityApi;

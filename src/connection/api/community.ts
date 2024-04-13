import httpRequest from "../axios";
import { Community, Project, Study } from "@/interface";

const api = httpRequest.server;

function getCommunities() {
  return api.get<Community[]>("/api/community");
}

function getCommunity(id: number) {
  return api.get<Community>(`/api/community/${id}`);
}

function getProjects() {
  return api.get<Project[]>(`/api/community/projects`);
}

function getProject(id: number) {
  return api.get<Project>(`/api/community/projects/${id}`);
}

export const getStudies = () => {
  return api.get<Study[]>("/api/community/studies");
};

export const getStudy = (id: number) => {
  return api.get<Study>(`/api/community/studies/${id}`);
};

const communityApi = {
  getAll: getCommunities,
  get: getCommunity,
  project: {
    getAll: getProjects,
    get: getProject,
  },
  study: {
    getAll: getStudies,
    get: getStudy,
  },
};

export default communityApi;

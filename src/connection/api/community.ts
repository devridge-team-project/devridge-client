import httpRequest from "../axios";
import {
  Community,
  CommunityPost,
  Project,
  ProjectPost,
  Study,
  StudyPost,
} from "@/interface";

const api = httpRequest.server;

function getCommunities() {
  return api.get<Community[]>("/api/community");
}

function getCommunity(id: number) {
  return api.get<Community>(`/api/community/${id}`);
}

const postCommunity = ({ title, content, hashtags = [] }: CommunityPost) => {
  return api.post("api/community", {
    title,
    content,
    hashtags,
  });
};

function getProjects() {
  return api.get<Project[]>(`/api/community/projects`);
}

function getProject(id: number) {
  return api.get<Project>(`/api/community/projects/${id}`);
}

const postProject = ({
  title,
  content,
  skillIds,
  roles,
  meeting,
}: ProjectPost) => {
  return api.post("api/community/projects", {
    title,
    content,
    skillIds,
    roles,
    meeting,
  });
};

export const getStudies = () => {
  return api.get<Study[]>("/api/community/studies");
};

export const getStudy = (id: number) => {
  return api.get<Study>(`/api/community/studies/${id}`);
};

const postStudy = ({
  title,
  content,
  category,
  location,
  totalPeople,
  currentPeople,
}: StudyPost) => {
  return api.post("api/community/studies", {
    title,
    content,
    category,
    location,
    totalPeople,
    currentPeople,
  });
};

const communityApi = {
  getAll: getCommunities,
  get: getCommunity,
  post: postCommunity,
  project: {
    getAll: getProjects,
    get: getProject,
    post: postProject,
  },
  study: {
    getAll: getStudies,
    get: getStudy,
    post: postStudy,
  },
};

export default communityApi;

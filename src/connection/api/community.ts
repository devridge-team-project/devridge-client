import httpRequest from "../axios";
import {
  Community,
  CommunityRequest,
  Project,
  ProjectRequest,
  Study,
  StudyRequest,
  Answer,
  Content,
} from "@/interface";

const api = httpRequest.server;

function getCommunities() {
  return api.get<Community[]>("/api/community");
}

function getCommunity(id: number) {
  return api.get<Community>(`/api/community/${id}`);
}

const postCommunity = ({ title, content }: CommunityRequest) => {
  return api.post("api/community", {
    title,
    content,
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
}: ProjectRequest) => {
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

const postStudy = ({ title, content, category, location }: StudyRequest) => {
  return api.post("api/community/studies", {
    title,
    content,
    category,
    location,
  });
};

export const getCommunityComments = (id: number) => {
  return api.get<Answer[]>(`api/community/${id}/comments`);
};

export const postCommunityComments = (id: number, content: Content) => {
  return api.post(`api/community/${id}/comments`, content);
};

export const getProjectComments = (id: number) => {
  return api.get<Answer[]>(`api/community/projects/${id}/comments`);
};

export const postProjectComments = (id: number, content: Content) => {
  return api.post(`api/community/projects/${id}/comments`, content);
};

export const getStudyComments = (id: number) => {
  return api.get<Answer[]>(`api/community/studies/${id}/comments`);
};

export const postStudyComments = (id: number, content: Content) => {
  return api.post(`api/community/studies/${id}/comments`, content);
};

const communityApi = {
  getAll: getCommunities,
  get: getCommunity,
  post: postCommunity,
  answer: {
    getAll: getCommunityComments,
    post: postCommunityComments,
  },
  project: {
    getAll: getProjects,
    get: getProject,
    post: postProject,
    answer: {
      getAll: getProjectComments,
      post: postProjectComments,
    },
  },
  study: {
    getAll: getStudies,
    get: getStudy,
    post: postStudy,
    answer: {
      getAll: getStudyComments,
      post: postStudyComments,
    },
  },
};

export default communityApi;

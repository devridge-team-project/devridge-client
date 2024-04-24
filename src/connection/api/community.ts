import httpRequest from "../axios";
import {
  Community,
  CommunityRequest,
  Project,
  ProjectRequest,
  Study,
  StudyRequest,
  Answer,
  AnswerRequest,
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

export const postCommunityComments = ({ id, content }: AnswerRequest) => {
  return api.post(`api/community/${id}/comments`, { content });
};

export const getProjectComments = (id: number) => {
  return api.get<Answer[]>(`api/community/projects/${id}/comments`);
};

export const postProjectComments = ({ id, content }: AnswerRequest) => {
  return api.post(`api/community/projects/${id}/comments`, { content });
};

export const getStudyComments = (id: number) => {
  return api.get<Answer[]>(`api/community/studies/${id}/comments`);
};

export const postStudyComments = ({ id, content }: AnswerRequest) => {
  return api.post(`api/community/studies/${id}/comments`, { content });
};

export const postCommunityLikes = (id: number) => {
  return api.post(`api/community/${id}/like`);
};

export const postCommunityScraps = (id: number) => {
  return api.post(`api/community/${id}/scraps`);
};

export const postStudyLikes = (id: number) => {
  return api.post(`api/community/studies/${id}/like`);
};

export const postStudyScraps = (id: number) => {
  return api.post(`api/community/studies/${id}/scraps`);
};

export const postProjectLikes = (id: number) => {
  return api.post(`api/community/studies/${id}/like`);
};

export const postProjectScraps = (id: number) => {
  return api.post(`api/community/studies/${id}/scraps`);
};

const communityApi = {
  getAll: getCommunities,
  get: getCommunity,
  post: postCommunity,
  scraps: {
    post: postCommunityScraps,
  },
  likes: {
    post: postCommunityLikes,
  },
  answer: {
    getAll: getCommunityComments,
    post: postCommunityComments,
  },
  project: {
    getAll: getProjects,
    get: getProject,
    post: postProject,
    scraps: {
      post: postProjectScraps,
    },
    likes: {
      post: postProjectLikes,
    },
    answer: {
      getAll: getProjectComments,
      post: postProjectComments,
    },
  },
  study: {
    getAll: getStudies,
    get: getStudy,
    post: postStudy,
    scraps: {
      post: postStudyScraps,
    },
    likes: {
      post: postStudyLikes,
    },
    answer: {
      getAll: getStudyComments,
      post: postStudyComments,
    },
  },
};

export default communityApi;

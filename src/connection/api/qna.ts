import httpRequest from "../axios";
import { Question, QuestionDetail, Answer, QuestionPost } from "@/interface";

const api = httpRequest.server;

function getQnaAll(sortOption: "views" | "latest") {
  return api.get<Question[]>("/api/qna", { params: { sortOption } });
}

function getQna(id: number) {
  return api.get<QuestionDetail>(`/api/qna/${id}`);
}

function postQna(data: QuestionPost) {
  return api.post("/api/qna", data);
}

function getComments(id: number) {
  return api.get<Answer[]>(`/api/qna/${id}/comments`);
}

function postComments(id: number, data: object) {
  return api.post(`/api/qna/${id}/comments`, data);
}

const qna = {
  getAll: getQnaAll,
  get: getQna,
  post: postQna,
  comments: {
    get: getComments,
    post: postComments,
  },
};

export default qna;

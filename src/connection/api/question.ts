import httpRequest from "../axios";
import { Question, QuestionById, Answer, QuestionPost } from "@/interface";

const api = httpRequest.server;

function getQuestions(sortOption: "views" | "latest") {
  return api.get<Question[]>("/api/questions", { params: { sortOption } });
}

function getQuestion(id: number) {
  return api.get<QuestionById>(`/api/questions/${id}`);
}

function postQuestion(data: QuestionPost) {
  return api.post("/api/questions", data);
}

function patchQuestion(id: number, data: QuestionPost) {
  return api.patch(`/api/questions/${id}`, data);
}

function deleteQuestion(id: number) {
  return api.delete(`/api/questions/${id}`);
}

function getAnswers(id: number) {
  return api.get<Answer[]>(`/api/questions/${id}/answers`);
}

function postAnswer(id: number, data: object) {
  return api.post(`/api/qna/${id}/answers`, data);
}

function patchAnswer(id: number, data: object) {
  return api.patch(`/api/qna/${id}/answers`, data);
}

function deleteAnswer(id: number) {
  return api.delete(`/api/qna/${id}/answers`);
}

const questionApi = {
  getAll: getQuestions,
  get: getQuestion,
  post: postQuestion,
  patch: patchQuestion,
  delete: deleteQuestion,
  answer: {
    getAll: getAnswers,
    post: postAnswer,
    patch: patchAnswer,
    delete: deleteAnswer,
  },
};

export default questionApi;

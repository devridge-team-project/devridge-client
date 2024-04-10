import httpRequest from "../axios";
import { Question, QuestionDetail, Answer, QuestionPost } from "@/interface";

const api = httpRequest.server;

function getQuestionsAll(sortOption: "views" | "latest") {
  return api.get<Question[]>("/api/questions", { params: { sortOption } });
}

function getQuestion(id: number) {
  return api.get<QuestionDetail>(`/api/questions/${id}`);
}

function postQuestion(data: QuestionPost) {
  return api.post("/api/questions", data);
}

function getAnswers(id: number) {
  return api.get<Answer[]>(`/api/questions/${id}/answers`);
}

function postAnswer(id: number, data: object) {
  return api.post(`/api/qna/${id}/answers`, data);
}

const questionApi = {
  getAll: getQuestionsAll,
  get: getQuestion,
  post: postQuestion,
  answer: {
    get: getAnswers,
    post: postAnswer,
  },
};

export default questionApi;

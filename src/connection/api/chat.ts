import httpRequest from "../axios";
import {
  ChatMessage,
  ChatPost,
  PrivateMessage,
  SendReceiveChat,
} from "@/interface";
const api = httpRequest.server;

const getCoffeeChatMessage = () => {
  return api.get<ChatMessage[]>("api/coffee-chat");
};

const getCoffeeChatMessageById = (id: number) => {
  return api.get<PrivateMessage[]>(`api/coffee-chat/rooms/${id}`);
};

const getCoffeeChatReq = (viewOption: "send" | "receive") => {
  return api.get<SendReceiveChat>("api/coffee-chat/requests", {
    params: { viewOption },
  });
};

const postCoffeeChat = ({ toMemberId, message }: ChatPost) => {
  return api.post("api/coffee-chat/requests", { toMemberId, message });
};

const deleteCoffeeChat = (id: number) => {
  return api.delete(`api/coffee-chat/requests/${id}`);
};

const patchCoffeeChatReq = (id: number, answer: string) => {
  return api.patch(`api/coffee-chat/requests/${id}`, { answer });
};

const chatApi = {
  getAll: getCoffeeChatMessage,
  get: getCoffeeChatMessageById,
  post: postCoffeeChat,
  delete: deleteCoffeeChat,
  requests: {
    get: getCoffeeChatReq,
    patch: patchCoffeeChatReq,
  },
};

export default chatApi;

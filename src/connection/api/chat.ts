import httpRequest from "../axios";
import { ChatMessage, PrivateMessage, SendReceiveChat } from "@/interface";
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

const postCoffeeChat = (toMemberId: number, message: string) => {
  console.log(message);
  return api.post("api/coffee-chat/requests", { toMemberId, message });
};

const patchCoffeeChatReq = (id: number, answer: string) => {
  return api.patch(`api/coffee-chat/requests/${id}`, { answer });
};

const chatApi = {
  getAll: getCoffeeChatMessage,
  get: getCoffeeChatMessageById,
  post: postCoffeeChat,
  requests: {
    get: getCoffeeChatReq,
    patch: patchCoffeeChatReq,
  },
};

export default chatApi;

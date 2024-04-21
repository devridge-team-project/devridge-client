import httpRequest from "../axios";
import { Note, NoteRequest } from "@/interface";

const api = httpRequest.server;

function getNotes() {
  return api.get<Omit<Note, "senderId">[]>("/api/notes/rooms");
}

function getNote(id: number) {
  return api.get<Omit<Note, "userInformation">[]>(`/api/notes/rooms/${id}`);
}

const postNote = ({ content, receiverId }: NoteRequest) => {
  return api.post("/api/notes", {
    content,
    receiverId,
  });
};

const NoteApi = {
  getAll: getNotes,
  get: getNote,
  post: postNote,
};

export default NoteApi;

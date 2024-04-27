import httpRequest from "../axios";
import { Note, NoteRequest } from "@/interface";

const api = httpRequest.server;

function getNotes() {
  return api.get<Note[]>("/api/notes/rooms");
}

function getNote(id: number) {
  return api.get<Note[]>(`/api/notes/rooms/${id}`);
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

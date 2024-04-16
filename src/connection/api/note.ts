import httpRequest from "../axios";
import { Notes, Note, NotePost } from "@/interface";

const api = httpRequest.server;

function getNotes() {
  return api.get<Notes[]>("/api/notes/rooms");
}

function getNote(id: number) {
  return api.get<Note[]>(`/api/notes/rooms/${id}`);
}

const postNote = ({ content, receiverId }: NotePost) => {
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

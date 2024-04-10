import httpRequest from "../axios";
import { Community, CommunityContent } from "@/interface";

const api = httpRequest.server;

function getCommunities() {
  return api.get<Community>("/api/community");
}

function getCommunity(id: number) {
  return api.get<CommunityContent>(`/api/community/${id}`);
}

const communityApi = {
  getAll: getCommunities,
  get: getCommunity,
};

export default communityApi;

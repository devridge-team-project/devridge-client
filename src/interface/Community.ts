import { Member } from "./Member";

interface Hashtag {
  id: number;
  word: string;
}

interface CommunitySort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface CommunityPageable {
  sort: CommunitySort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
}

export interface CommunityContent {
  id: number;
  createdAt: string;
  updatedAt: string;

  title: string;
  content: string;
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  comments: number;
  member: Member;
  hashtags: Hashtag[];
  scraps: number;
}

export interface Community {
  content: CommunityContent[];
  pageable: CommunityPageable;
  size: number;
  number: number;
  sort: CommunitySort;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

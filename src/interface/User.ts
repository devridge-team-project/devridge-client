export interface User {
  id: number;
  nickname: string;
  imageUrl: string | undefined;
  introduction: string;
  skillIds: number[];
  occupation: string;
}

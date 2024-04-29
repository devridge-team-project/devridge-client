export interface User {
  id: number;
  nickname: string;
  imageUrl: string | undefined;
  introduction: string;
  skillIds: number[];
  occupation: string;
}

export interface ResetPassWord {
  password: string;
  email: string;
  tempJwt: string;
}

export interface Token {
  token: string;
}

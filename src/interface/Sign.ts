export interface SignInRequest {
  email: string;
  password: string;
}
export interface SocialLoginRequest {
  provider: string;
  code: string;
}
export interface SocialLoginResponse {
  tempJwt: string;
  accessToken: string;
}

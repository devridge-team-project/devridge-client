import Axios, { AxiosRequestConfig } from "axios";

const {
  VITE_SERVER_URL: serverOrigin,
  VITE_AUTH_NAVER_AUTH_ORIGIN: naverOrigin,
  VITE_AUTH_KAKAO_AUTH_ORIGIN: kakaoOrigin,
  VITE_AUTH_GITHUB_ORIGIN: gitHubOrigin,
  VITE_AUTH_GOOGLE_AUTH_ORIGIN: googleOrigin,
} = import.meta.env;

const apiOrigin = {
  server: serverOrigin,
  auth: {
    naver: naverOrigin,
    kakao: kakaoOrigin,
    gitHub: gitHubOrigin,
    google: googleOrigin,
  },
};

const axios = (ContentType: string, baseURL: string) => {
  const config: AxiosRequestConfig = {
    baseURL: baseURL || "/api",
    headers: {
      "Content-type": ContentType,
    },
  };
  const instance = Axios.create(config);
  return instance;
};

const http = (
  baseURL = "/api",
  options?: { version?: string; withCredentials?: boolean }
) => {
  const { version, withCredentials } = options ?? {
    version: "",
    withCredentials: false,
  };
  const axiosJson = axios(
    "application/json",
    typeof version !== "undefined" ? [baseURL, version].join("/") : baseURL
  );
  const axiosFormData = axios("form-data", baseURL ?? "/api");
  const axiosRequestConfig = withCredentials
    ? ({ withCredentials: true } as AxiosRequestConfig)
    : ({} as AxiosRequestConfig);

  return {
    get: <Response = unknown>(url: string, data?: AxiosRequestConfig) => {
      return axiosJson
        .get<Response>(url, { ...data, ...axiosRequestConfig }) //To add withCredentials option
        .then((res) => res.data);
    },
    post: <Request = any, Response = unknown>(url: string, data?: Request) => {
      return axiosJson
        .post<Response>(url, data, axiosRequestConfig)
        .then((res) => res.data);
    },
    postFormData: <Request = any, Response = unknown>(
      url: string,
      data?: Request
    ) => {
      return axiosFormData
        .post<Response>(url, data, axiosRequestConfig)
        .then((res) => res.data);
    },
    put: <Request = any, Response = unknown>(url: string, data?: Request) => {
      return axiosJson
        .put<Response>(url, data, axiosRequestConfig)
        .then((res) => res.data);
    },
    patch: <Request = any, Response = unknown>(url: string, data?: Request) => {
      return axiosJson
        .patch<Response>(url, data, axiosRequestConfig)
        .then((res) => res.data);
    },
    delete: <Response = unknown>(url: string, data?: object) => {
      return axiosJson.delete<Response>(url, data).then((res) => res.data);
    },
  };
};

const httpRequest = {
  server: http(apiOrigin.server),
};

export default httpRequest;

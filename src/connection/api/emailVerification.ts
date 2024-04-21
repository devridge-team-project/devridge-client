import httpRequest from "../axios";

const api = httpRequest.server;

function postCodeVerifications(email: string, code: number) {
  return api.post(`/api/email-verifications/code?email=${email}&code=${code}`);
}

async function postEmailVerifications(email: string) {
  return api.post("/api/email-verifications", { email });
}

const emailVerification = {
  post: postEmailVerifications,
  code: {
    post: postCodeVerifications,
  },
};

export default emailVerification;

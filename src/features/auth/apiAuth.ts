import api from "../../api/api";

const loginApi = (data: { username: string; password: string }) => {
  return api.post("/auth/login", data);
};

const authApi = {
  loginApi,
};

export default authApi;

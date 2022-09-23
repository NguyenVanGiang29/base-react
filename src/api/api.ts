import axios, { AxiosRequestConfig } from "axios";
import { store } from "../app/store";

const api = axios.create({
  baseURL: "https://www.task-manager.api.mvn-training.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (requestConfig: AxiosRequestConfig) => {
    const { token } = store.getState().auth;
    if (token) {
      requestConfig.headers = { Authorization: `Bearer ${token}` };
    }
    return requestConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

import { AxiosResponse } from "axios";
import api from "../../api/api";

export const getListTask = (): Promise<AxiosResponse> => {
  return api.get("/api/tasks");
};

export const taskApi = {
  getListTask,
};

export default taskApi;

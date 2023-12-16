import axios, { AxiosHeaders } from "axios";
import { useStore } from "@/store";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

api.interceptors.request.use((config) => {
  config.withCredentials = true;
  const token = useStore.getState().accessToken;

  if (token) {
    (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
  }

  return config;
});

export default api;

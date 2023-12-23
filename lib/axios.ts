import axios, { AxiosHeaders } from "axios";
import { useStore } from "@/store";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_URL_DEV
      : process.env.NEXT_PUBLIC_API_URL_DEV,
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

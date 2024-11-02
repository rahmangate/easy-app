import { BASE_API } from "@/config";
import axios from "axios";

export const api = axios.create({ baseURL: BASE_API });

api.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const authenticate = async (payload: any) => {
  try {
    let resp = await api.post("/auth/login", { ...payload });
    return { success: true, data: resp?.data };
  } catch (error) {
    return { success: false, message: error?.toString() };
  }
};

export const signup = async (payload: any) => {
  try {
    let resp = await api.post("/auth/register", { ...payload });
    return { success: true, data: resp?.data?.data };
  } catch (error) {
    return { success: false, message: error?.toString() };
  }
};

export const getLocations = async () => {
  try {
    let resp = await api.get("/locations");
    return { success: true, data: resp.data.data };
  } catch (error) {
    return { success: false, message: error?.toString() };
  }
};

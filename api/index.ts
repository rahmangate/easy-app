import { BASE_API } from "@/config";
import axios from "axios";

axios.create({ baseURL: BASE_API });

export const api = axios;

export const authenticate = async (payload: any) => {
  try {
    let resp = await axios.post("/auth/login", { ...payload });
    return { success: true, data: resp.data };
  } catch (error) {
    return { success: false, message: error?.toString() };
  }
};

export const signup = async (payload: any) => {
  try {
    let resp = await axios.post("/auth/signup", { ...payload });
    return { success: true, data: resp.data };
  } catch (error) {
    return { success: false, message: error?.toString() };
  }
};

export const getLocations = async () => {
  try {
    let resp = await axios.get("/locations");
    console.log(resp);
    return { success: true, data: resp.data };
  } catch (error) {
    console.log(error);
    return { success: false, message: error?.toString() };
  }
};

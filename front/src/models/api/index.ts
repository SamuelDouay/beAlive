import axios, { type AxiosInstance } from "axios";

const INSTANCE_API: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 1000,
  headers: {
    "x-access-token": "",
  },
});

export default INSTANCE_API;

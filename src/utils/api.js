import axios from "axios";

export const axiosServiceHandler = axios.create({
  timeout: 25000,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const axiosClientHandler = axios.create({
  timeout: 25000,
});

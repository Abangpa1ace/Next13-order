import axios from "axios";

const baseURL = '/api';

export const axiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" }
})
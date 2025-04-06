import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;


console.log("API Base URL:", API_BASE_URL); // Debugging

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token if exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;

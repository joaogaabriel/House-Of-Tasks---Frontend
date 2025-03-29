import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
const token = import.meta.env.VITE_APP_TOKEN || "";

const Api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export { Api };

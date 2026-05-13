// src/lib/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// loading dihandle manual di setiap fetch, contohnya:
// setIsLoading(true)
// await axiosInstance.get("/blogs")
// setIsLoading(false)

export default axiosInstance;

import axios from "axios";
const axiosInstance = axios.create({ baseURL: "https://artist-locator.onrender.com/api" });
export default axiosInstance;

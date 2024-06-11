import axios from "axios";
import toast from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const postAxiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

export default axiosInstance;

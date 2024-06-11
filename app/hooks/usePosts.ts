import { useQuery } from "react-query";
import axiosInstance from "../lib/apiClient";

export interface Post {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const fetchPost = async () => {
  const response = await axiosInstance.get("products");
  return response.data;
};

const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });
};

export default usePosts;

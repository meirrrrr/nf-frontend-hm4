import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../lib/apiClient";
import { Post } from "./usePosts";

interface PostData {
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const createBlog = async (postData: PostData): Promise<Post> => {
  const res = await axiosInstance.post("products", postData);
  console.log(res);
  return res.data;
};

const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, PostData>({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export { useCreatePost };

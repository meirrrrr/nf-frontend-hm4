"use client";
import PostCard from "./Post";
import usePosts from "../hooks/usePosts";

export const PostList = () => {
  const { data, isLoading, isSuccess } = usePosts();

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {isSuccess &&
        data.map((post) => {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              price={post.price}
              category={post.category}
              description={post.description}
              image={post.image}
            />
          );
        })}
    </div>
  );
};

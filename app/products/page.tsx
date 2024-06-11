import React, { FC } from "react";
import { PostList } from "../components/Post-list";

const page: FC = () => {
  return (
    <div className="bg-gray-200 p-12">
      <div className="flex justify-center my-4">
        <h1 className="text-4xl font-semibold mb-10">OLX</h1>
      </div>
      <PostList />
    </div>
  );
};

export default page;

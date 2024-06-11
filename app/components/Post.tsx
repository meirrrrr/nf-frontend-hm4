"use client";
import { Post } from "../hooks/usePosts";

export default function PostCard({
  id,
  title,
  price,
  category,
  description,
  image,
}: Post) {
  return (
    <div className="bg-white grid-rows-4 px-3 py-5 rounded-md">
      <div className="flex flex-col justify-center">
        <img className="object-cover py-4 h-[250px]" src={image} alt="img" />
        <h3 className="font-light px-4">{title}</h3>
        <p className="px-4 font-semibold">{price} $.</p>
      </div>
    </div>
  );
}

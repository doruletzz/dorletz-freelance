import React from "react";
import { getArticlePosts } from "./utils";

const CaseStudies = () => {
  const posts = getArticlePosts();

  return (
    <div className="flex flex-col gap-4 text-lg font-bold items-center mt-24 min-h-[45vh]">
      {posts.map((post) => (
        <div key={post.slug}>{post.slug}</div>
      ))}
    </div>
  );
};

export default CaseStudies;

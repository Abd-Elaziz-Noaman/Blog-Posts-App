import { Post } from "./types";

const get = async () => {
  const res = await fetch("https://dev.to/api/articles");
  const posts: Post[] = await res.json();

  return posts;
};

export const postsService = {
  get,
};

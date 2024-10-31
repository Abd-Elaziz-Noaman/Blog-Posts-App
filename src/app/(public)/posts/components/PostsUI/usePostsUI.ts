import { postsService } from "@/services/posts/postsServices";
import { Post } from "@/services/posts/types";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const usePostsUI = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[] | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchQuery(newValue);
    const newFilteredPosts = [...posts].filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );
    setFilteredPosts(newFilteredPosts);
  };

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const posts = await postsService.get();
      setPosts(posts);
    } catch (err: any) {
      toast.error("Failed to fetch posts!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { isLoading, searchQuery, posts, filteredPosts, handleSearch };
};

export default usePostsUI;

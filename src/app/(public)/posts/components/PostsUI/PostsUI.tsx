"use client";

import SearchBox from "@/components/SearchBox";
import {
  HeadText,
  MainContainer,
  PostsContainer,
  SubHeadText,
  TipBlock,
} from "./PostsUI.styled";
import { useEffect, useState } from "react";
import { Post } from "@/services/posts/types";
import { postsService } from "@/services/posts/postsServices";
import PostCard from "./components/PostCard";

const PostsUI = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const posts = await postsService.get();
      console.log("🚀 ~ fetchPosts ~ posts:", posts);
      setPosts(posts);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <MainContainer>
      <TipBlock>Our blog</TipBlock>
      <HeadText>Resources and insights</HeadText>
      <SubHeadText>
        The latest industry news, interviews, technologies, and resources.
      </SubHeadText>
      <SearchBox />
      <PostsContainer>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          posts.map((post) => <PostCard key={post.id} data={post} />)
        )}
      </PostsContainer>
    </MainContainer>
  );
};

export default PostsUI;

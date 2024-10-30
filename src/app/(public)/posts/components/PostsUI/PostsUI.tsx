"use client";

import SearchBox from "@/components/SearchBox";
import {
  HeadText,
  MainContainer,
  PostsContainer,
  SubHeadText,
  TipBlock,
} from "./PostsUI.styled";
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Post } from "@/services/posts/types";
import { postsService } from "@/services/posts/postsServices";
import PostCard from "./components/PostCard";
import LoadingSpinner from "@/components/LoadingSpinner";

const PostsUI = () => {
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

  return (
    <MainContainer>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Fragment>
          <TipBlock>Our blog</TipBlock>
          <HeadText>Resources and insights</HeadText>
          <SubHeadText>
            The latest industry news, interviews, technologies, and resources.
          </SubHeadText>
          <SearchBox value={searchQuery} onChange={handleSearch} />
          <PostsContainer>
            {(searchQuery.length > 0 ? filteredPosts : posts)?.map((post) => (
              <PostCard key={post.id} data={post} />
            ))}
          </PostsContainer>
        </Fragment>
      )}
    </MainContainer>
  );
};

export default PostsUI;

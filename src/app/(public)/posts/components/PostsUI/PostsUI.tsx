"use client";

import SearchBox from "@/components/SearchBox";
import {
  HeadText,
  MainContainer,
  PostsContainer,
  SubHeadText,
  TipBlock,
} from "./PostsUI.styled";
import { Fragment } from "react";
import PostCard from "./components/PostCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import usePostsUI from "./usePostsUI";
import { PRIMARY_COLOR } from "@/app/styles/colors";

const PostsUI = () => {
  const { isLoading, searchQuery, posts, filteredPosts, handleSearch } =
    usePostsUI();

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

          {posts.length === 0 ? (
            <h2 style={{ color: PRIMARY_COLOR, margin: "auto" }}>
              There are no post to display yet!
            </h2>
          ) : (
            <PostsContainer>
              {(searchQuery.length > 0 ? filteredPosts : posts)?.map((post) => (
                <PostCard key={post.id} data={post} />
              ))}
            </PostsContainer>
          )}
        </Fragment>
      )}
    </MainContainer>
  );
};

export default PostsUI;

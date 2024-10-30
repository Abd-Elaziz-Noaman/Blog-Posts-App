import Image from "next/image";
import {
  AvatarTitle,
  DateText,
  DescriptionText,
  HeadText,
  MainContainer,
  RowStack,
  PostImage,
  SubHeadText,
  AvatarImage,
  AvatarWrapper,
} from "./PostCard.styled";
import ArrowIcon from "@/components/icons/ArrowIcon";
import { Post } from "@/services/posts/types";
import { FC } from "react";

interface PostCardProps {
  data: Post;
}

const PostCard: FC<PostCardProps> = ({ data }) => {
  const { title, type_of, description, published_at, user, social_image } =
    data;

  return (
    <MainContainer>
      <PostImage alt="post image" src={social_image} width={500} height={300} />
      <SubHeadText>{type_of}</SubHeadText>
      <RowStack>
        <HeadText>{title}</HeadText>
        <ArrowIcon />
      </RowStack>
      <DescriptionText>{description}</DescriptionText>
      <AvatarWrapper>
        <AvatarImage
          alt="avatar"
          src={user.profile_image}
          width={40}
          height={40}
        />
        <div>
          <AvatarTitle>{user.name}</AvatarTitle>
          <DateText>{new Date(published_at).toDateString()}</DateText>
        </div>
      </AvatarWrapper>
    </MainContainer>
  );
};

export default PostCard;

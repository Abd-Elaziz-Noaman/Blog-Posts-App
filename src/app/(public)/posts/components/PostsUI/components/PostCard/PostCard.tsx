import Image from "next/image";
import {
  AvatarTitle,
  DateText,
  DescriptionText,
  HeadText,
  MainContainer,
  RowStack,
  SubHeadText,
} from "./PostCard.styled";
import ArrowIcon from "@/components/icons/ArrowIcon";

const PostCard = () => {
  return (
    <MainContainer>
      <Image alt="post image" src="" />
      <SubHeadText>daafafa</SubHeadText>
      <RowStack>
        <HeadText>dadadhakdlsaldadlahdas</HeadText>
        <ArrowIcon />
      </RowStack>
      <DescriptionText>dadadkadajhdakjdbajdabdjkabdajkdbajdada</DescriptionText>
      <RowStack>
        <Image alt="avatar" src="" />
        <div>
          <AvatarTitle>asfadafasd</AvatarTitle>
          <DateText>20 Jan 2022</DateText>
        </div>
      </RowStack>
    </MainContainer>
  );
};

export default PostCard;

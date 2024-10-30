import SearchBox from "@/components/SearchBox";
import {
  HeadText,
  MainContainer,
  SubHeadText,
  TipBlock,
} from "./PostsUI.styled";

const PostsUI = () => {
  return (
    <MainContainer>
      <TipBlock>Our blog</TipBlock>
      <HeadText>Resources and insights</HeadText>
      <SubHeadText>
        The latest industry news, interviews, technologies, and resources.
      </SubHeadText>
      <SearchBox />
    </MainContainer>
  );
};

export default PostsUI;

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
    </MainContainer>
  );
};

export default PostsUI;
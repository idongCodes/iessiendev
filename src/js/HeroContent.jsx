import MyImg from "./MyImg";
import styled from "styled-components";
import NameTitleContainer from "./NameTitleContainer";
import HeroBlurb from './HeroBlurb';

const HeroContentStyles = styled.div`
  height: 65vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

export default function HeroContent() {
  return (
    <HeroContentStyles>
      <NameTitleContainer />
      <MyImg />
      <HeroBlurb />
    </HeroContentStyles>
  );
}

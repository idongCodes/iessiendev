import HeroContent from './HeroContent';
import styled from 'styled-components';

const cobaltBlue = "#0047ab";

const HeroContainer = styled.div`
background:${cobaltBlue};
color:white;
padding:130px 25px 0;
`

export default function HeroDiv() {
  return (
    <HeroContainer>
      <HeroContent />
    </HeroContainer>
  );
}

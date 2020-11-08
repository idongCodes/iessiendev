import me from "../assets/me.jpeg";
import styled from "styled-components";

const ProfilePic = styled.img`
  width: 350px;
  display: inline-block;
  border-radius: 175px;
  position: relative;
  top: 45px;
  left: -100px;
`

export default function MyImg() {
  return <ProfilePic src={me} alt="my selfie" className="me" />;
}

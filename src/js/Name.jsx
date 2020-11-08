import styled from "styled-components";

const MyName = styled.h1`
  font-size:3.4rem;
  font-family:'Oswald';
  color:whitesmoke;
`

export default function Name() {
  return (
    <div>
      <MyName>Idong Essien</MyName>
    </div>
  );
}

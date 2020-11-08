import styled from "styled-components";

const Topbar = styled.div`
  background: rgba(white, 1);
  padding: 0.5% 1.5%;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ion-icon {
    color: $cobaltBlue;
    font-size: 2.3rem;
  }
`;

const Logo = styled.a`
font-family: 'Fredericka the Great', cursive;
color:white;
text-decoration:none;
font-weight:700;
font-size:1.7rem;
`

export default function TopBar() {
  return (
    <Topbar>
      <Logo href="">i.E.</Logo>
      <ion-icon name="menu-sharp"></ion-icon>
    </Topbar>
  );
}

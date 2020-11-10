import styled from "styled-components";
import MenuIcon from './MenuIcon';
import { Link } from 'react-router-dom';

const Topbar = styled.div`
  background:rgb(255,255,255);
  padding:10px;
  color: $cobaltBlue;
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
color:#0047ab;
text-decoration:none;
font-weight:700;
font-size:1.7rem;
`

const logoLink = {
  'text-decoration':'none',
}

export default function TopBar() {
  return (
    <Topbar>
      <Link style={logoLink} to="/">
        <Logo href="">i.E.</Logo>
      </Link>
      <MenuIcon />
    </Topbar>
  );
}

import styled from 'styled-components';

const MainNavStyle = styled.nav`
height:45vh;
position:absolute;
right:25px;
background:skyblue;
width:240px;
border-radius:18px;
`
const ulStyle = {
'border':'1px dashed yellow',
'height':'100%',
}

export default function MainNav(){
    return(
        <MainNavStyle>
            <ul style={ulStyle}>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </MainNavStyle>
    );
}
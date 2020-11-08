import styled from 'styled-components'

const Position = styled.h3`
position:relative;
z-index:96;
top:-10px;
left:15px;
font-size:1.6rem;
font-family:'Oswald';
color:skyblue;
transform:rotate(-2deg);
`

export default function SubTitle() {
    return (
        <Position>Full-Stack Software Engineer</Position>
    );
}
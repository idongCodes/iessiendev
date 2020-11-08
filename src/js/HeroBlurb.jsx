import styled from 'styled-components';

const HeroPara = styled.p`
font-family:'Oswald';
font-weight:400;
color:#555;
font-size:1.4rem;
line-height:1.8rem;
position:relative;
top:90px;
background:white;
padding:20px;
border-radius:20px 20px 0 0;

span {
    color:black;
    font-family:'Oswald';
    font-weight:500;
}
`

export default function HeroBlurb() {
    return (
        <HeroPara><span>Full-Stack Web Developer</span> and <span>Software Engineer</span> with a passion for; working remotely, programming to solve problems, coding to build things, and learning new technologies 💻.</HeroPara>
    );
}
import styled from 'styled-components';

const AboutContainer = styled.div`
height:80vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const About = () => {
    return (
        <AboutContainer>
            <h1>Hello From About Component</h1>
        </AboutContainer>
    );
}

export default About;
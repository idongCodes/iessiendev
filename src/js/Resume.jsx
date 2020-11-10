import styled from 'styled-components';

const ResumeContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:80vh;
`

const Resume = () => {
  return (
      <ResumeContainer>
          <h1>Hello from Resume Component</h1>
      </ResumeContainer>
  );
}

export default Resume;
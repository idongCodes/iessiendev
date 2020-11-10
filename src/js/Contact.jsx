import styled from 'styled-components';

const ContactContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:80vh;
`

const Contact = () => {
  return (
      <ContactContainer>
          <h1>Hello from Contact Component</h1>
      </ContactContainer>
  );
}

export default Contact;
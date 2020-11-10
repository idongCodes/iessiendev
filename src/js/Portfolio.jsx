import styled from 'styled-components';

const PortfolioContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:80vh;
`

const Portfolio = () => {
  return (
      <PortfolioContainer>
          <h1>Hello from Portfolio Component</h1>
      </PortfolioContainer>
  );
}

export default Portfolio;
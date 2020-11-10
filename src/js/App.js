import '../css/App.css';
import TopBar from './TopBar';
import Container from './Container';
import Footer from './Footer';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

const AppContainer = styled.div`
  min-width: 275px;
  margin: auto;
  height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <TopBar />
      
      <Footer />

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
        <Container />
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;

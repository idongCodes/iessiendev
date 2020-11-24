// import { Switch, Route } from 'react-router-dom';
import '../css/index.css'
import { TopBar } from './TopBar';
import { MainContent } from './MainContent';
import { Footer } from './Footer';

function App() {
  return (
    <div className='app-container'>
      <TopBar />
      <MainContent />
      <Footer />
     
      {/* <Switch>
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
      </Switch> */}
    </div>
  );
}

export default App;

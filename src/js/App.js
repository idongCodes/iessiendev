import { Switch, Route } from 'react-router-dom';
import '../css/index.css'
import { TopBar } from './TopBar';
import { MainContent } from './MainContent';
import { Portfolio, Contact } from './pages';
import About from './About';
import Resume from './Resume';

function App() {
  return (
    <div className='app-container'>
      <TopBar />
      <MainContent />
     
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
          <MainContent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

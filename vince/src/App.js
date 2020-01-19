import React from 'react';
import './App.css';
// Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// components
import Navbar from './components/header/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Mobi from './components/pages/Mobi';
import Contact from './components/footer/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          {/* <Route exact path="/" reder = { props => {
              <React.Fragment>
                <Home />
                <Mobi />
              </React.Fragment>
            }
          } />           */}
          <Route exact path="/" >
            <Home />
            <Mobi />
          </Route>

          <Route path="/about" component={About} />
        </Switch>

        <Contact />  
      </div>
    </Router>
  );
}

export default App;


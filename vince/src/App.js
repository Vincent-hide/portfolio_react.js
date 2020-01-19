import React from 'react';
import './App.css';
// Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// components
import Navbar from './components/header/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Mobi from './components/pages/Mobi';

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
          {/* <Route path="/" component={Mobi} /> */}

          <Route path="/about" component={About} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;

// for image
// https://wall.alphacoders.com/by_sub_category.php?id=202537&name=Tokyo+Wallpapers

// React BS
// https://react-bootstrap.github.io/

// Styled Components
// https://styled-components.com/

// React - BS
// https://youtu.be/tOK9l5uP06U
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About, Events, Contact, Whoops404 } from './Pages';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <Whoops404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

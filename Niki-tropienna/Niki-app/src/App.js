
import Home from './Home.js';
import Works from './Works.js';
import Contacts from "./Contacts.js";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
     
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/works">
        <Works />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
      
    </Switch>
  </Router>
  );
}

export default App;

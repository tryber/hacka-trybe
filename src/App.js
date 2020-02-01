import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={"<component />"} />
        <Route path="/faq" component={"<component />"} />
        <Route path="/info:id" component={"<component />"} />
      </Switch>
    </Router>
  );
}

export default App;

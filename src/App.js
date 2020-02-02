import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from './components/context/MapContext';
import MapInputs from './components/MapInputs';
import Geolocation from './components/Geolocation';
import SobreNos from './components/SobreNos'
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/">
            <MapInputs />
            <Geolocation />
          </Route>
          <Route path="/faq" component={"<component />"} />
          <Route path="/info:id" component={"<component />"} />
          <Route path="/about-us" component={<SobreNos />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

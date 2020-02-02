import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { Provider } from './components/context/MapContext';
import MapInputs from './components/MapInputs';
import Geolocation from './components/Geolocation';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/">
            <MapInputs />
            <Geolocation />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Provider } from './components/context/MapContext';
import MapInputs from './components/MapInputs';
import Geolocation from './components/Geolocation';
import InputSearch from './components/inputSearch';

function App() {
  return (
    <div className="App">
      <Provider>
        <MapInputs />
        <InputSearch />
        <Geolocation />
      </Provider>
    </div>
  );
}

export default App;

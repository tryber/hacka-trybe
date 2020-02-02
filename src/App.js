import React from 'react';
import './App.css';
import { Provider } from './components/context/MapContext';
import MapInputs from './components/MapInputs';
import Geolocation from './components/Geolocation';
import ContainPost from './components/ContainPost';

function App() {
  return (
    <div className="App">
      <Provider>
        {/* <MapInputs />
        <Geolocation /> */}
        <ContainPost />
      </Provider>
    </div>
  );
}

export default App;

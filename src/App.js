import React from 'react';
import './App.css';
import { Provider } from './components/context/MapContext';
import MapContainer from './components/Map';


function App() {
  return (
    <div className="App">
      <Provider>
        <MapContainer />
      </Provider>
    </div>
  );
}

export default App;

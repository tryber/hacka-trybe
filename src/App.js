import React from 'react';
import './App.css';
import { Provider } from './components/context/MapContext';
import MapInputs from './components/MapInputs';

function App() {
  return (
    <div className="App">
      <Provider>
        <MapInputs />
      </Provider>
    </div>
  );
}

export default App;

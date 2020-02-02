import React from 'react';
import './App.css';
import { Provider } from './components/context/MapContext';
// import MapInputs from './components/MapInputs';
// import Geolocation from './components/Geolocation';
import FAQ from './components/FAQ';
import faqData from './components/faqData';

function App() {
  return (
    <div className="App">
      <Provider>
        <FAQ questionList={faqData} />
        {/* <MapInputs />
        <Geolocation /> */}
      </Provider>
    </div>
  );
}

export default App;

import React, { createContext, useState } from 'react';

const MapContext = createContext();
const MapProvider = ({ children }) => {
  const [geolocation, setGeolocation] = useState({});
  const [endpoint, setEndpoint] = useState('');
  
  function generateGeolocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocation(position.coords);
        },
        (error) => {
          console.log(error);
        },
      );
    } else {
      console.log(
        "I'm sorry, but geolocation services are not supported by your browser.",
      );
    }
    return <div></div>;
  }

  const getGeolocationTrue = (location) => setGeolocation(location);
  const context = {
    geolocation,
    getGeolocationTrue,
    endpoint,
    setEndpoint,
    generateGeolocation
  };

  return <MapContext.Provider value={context}>{children}</MapContext.Provider>;
};

export { MapContext, MapProvider as Provider };

import React, { createContext, useState } from 'react';

const MapContext = createContext();
const MapProvider = ({ children }) => {
  const [geolocation, setGeolocation] = useState({});
  const [endpoint, setEndpoint] = useState('');
  const [geolocationEndpoint, setGeolocationEndpoint] = useState();

  const getGeolocationTrue = (location) => setGeolocation(location);
  const context = {
    geolocation,
    getGeolocationTrue,
    endpoint,
    setEndpoint,
    geolocationEndpoint,
    setGeolocationEndpoint,
  };

  return <MapContext.Provider value={context}>{children}</MapContext.Provider>;
};

export { MapContext, MapProvider as Provider };

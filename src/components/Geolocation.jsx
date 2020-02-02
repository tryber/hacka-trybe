import React, { useContext } from 'react';
import { MapContext } from './context/MapContext';

function Geolocation() {
  const { getGeolocationTrue } = useContext(MapContext);
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getGeolocationTrue(position.coords);
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

export default Geolocation;

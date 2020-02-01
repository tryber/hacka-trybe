import React from 'react';
import './Alerta.css';
import TwitterContainer from './TwitterContainer';
import Waze from './Waze'

function Alerta() {
  return (
    <div className="Alerta">
      <header className="Alerta-header">
       <TwitterContainer />
       <Waze />       
      </header>
    </div>
  );
}

export default Alerta;

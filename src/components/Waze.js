import React from 'react';

export default class Waze extends React.Component {
  render() {
    return (
      <div>
        <h2>Informações do Waze:</h2>
        <iframe className='waze-API' src="https://embed.waze.com/pt-BR/iframe?&zoom=15&lat=-19.953266&lon=-44.013061&pin=1" width="350" height="350"></iframe>
        <p>(para conferir mais informações sobre o trânsito, clique em "exibir mapa maior")</p>
      </div>
    )
  };
}
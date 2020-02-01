import React from 'react';

export default class Waze extends React.Component{
  render() {
    return(
      <div>
        <iframe className = 'waze-API' src="https://embed.waze.com/pt-BR/iframe?zoom=12&lat=19.8157&lon=-43.9542 19"
  width="300" height="400"></iframe>
      </div>
    )
  };
}
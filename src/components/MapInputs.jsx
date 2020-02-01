import React from 'react';
import MapContainer from './MapContainer';

class MapInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }

  changeHandler(event) {
    this.setState({
      filter: event.target.value,
    });
  }
  generateInputs() {
    return (
      <div>
        <input
          type="radio"
          onChange={(e) => this.changeHandler(e)}
          name="typeFilter"
          value="floods"
          id="floods"
        />
        <label htmlFor="floods">Alagamentos</label>
        <input
          type="radio"
          onChange={(e) => this.changeHandler(e)}
          name="typeFilter"
          value="donations"
          id="donations"
        />
        <label htmlFor="donations">Doações</label>
        <input
          type="radio"
          onChange={(e) => this.changeHandler(e)}
          name="typeFilter"
          value="shelters"
          id="shelters"
        />
        <label htmlFor="shelters">Abrigos</label>
      </div>
    );
  }

  render() {
    //   console.log(this.state.filter)
    return (
      <div>
        {this.generateInputs()}
        <MapContainer filter={this.state.filter} />
      </div>
    );
  }
}

export default MapInputs;

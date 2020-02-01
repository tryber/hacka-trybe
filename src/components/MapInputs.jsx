import React from 'react';
import MapContainer from './MapContainer';

class MapInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      data: [],
    };
  }

  requestAPIFloods(param) {
      return fetch(`https://hackatrybe.herokuapp.com/${param}`).then((data) =>
        data.json().then((response) => this.setState({ data: response})),
      );
    }

  changeHandler(event) {
      this.requestAPIFloods(event.target.value);
  }

  componentDidMount() {
      this.requestAPIFloods('donations');
  }
  generateInputs() {
    return (
      <div>
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
          value="floods"
          id="floods"
        />
        <label htmlFor="floods">Alagamentos</label>
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
        <MapContainer data={this.state.data}/>
      </div>
    );
  }
}

export default MapInputs;

import React from 'react';
import MapContainer from './MapContainer';
import { MapContext } from './context/MapContext';

class MapInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      data: [],
    };
  }

  requestAPI(param) {
      const { endpoint } = this.context;
      return fetch(`https://hackatrybe.herokuapp.com/${param}${endpoint}`).then((data) =>
        data.json().then((response) => this.setState({ data: response})),
      );
    }

  changeHandler(event) {
      this.requestAPI(event.target.value);
  }

  componentDidMount() {
      this.requestAPI('donations');
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
    return (
      <div>
        {this.generateInputs()}
        <MapContainer data={this.state.data}/>
      </div>
    );
  }
}

MapInputs.contextType = MapContext;
export default MapInputs;

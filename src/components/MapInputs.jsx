import React from 'react';
import Geocode from 'react-geocode';
import MapContainer from './MapContainer';
import { MapContext } from './context/MapContext';

class MapInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'donations',
      data: [],
      userAddress: '',
      endpoint: '',
      addressGeolocation: '',
    };
  }

  requestAPI(param, endpoint = '') {
    return fetch(
      `https://hackatrybe.herokuapp.com/${param}${endpoint}`,
    ).then((data) =>
      data.json().then((response) => this.changeDataState(response, endpoint)),
    );
  }

  changeDataState(response, endpoint) {
    this.setState({ data: response });
    if (endpoint !== '') {
      Geocode.setApiKey('AIzaSyDg2CCtZwxt0DZXmOtT2rK4oBKzUNkfGok');
      Geocode.fromAddress(this.state.userAddress).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          this.setState({ addressGeolocation: { lat, lng } });
        },
        (error) => {
          console.log(error);
        },
      );
    }
  }

  changeHandler(event) {
    this.setState({ filter: event.target.value });
    this.requestAPI(event.target.value);
  }

  componentDidMount() {
    this.requestAPI('donations');
  }

  sendAPIAddress() {
    if (this.state.userAddress !== '') {
      this.setState({ endpoint: `?s=${this.state.userAddress}` });
      this.requestAPI(this.state.filter, `?s=${this.state.userAddress}`);
    }
    return this.setState({ endpoint: '' });
  }

  generateButtonOfSearch() {
    return (
      <div>
        <input
          type="text"
          placeholder="Ex: rua andaluzita 131 Belo Horizonte MG"
          onBlur={(e) => this.setState({ userAddress: e.target.value })}
        />
        <button type="button" onClick={() => this.sendAPIAddress()}>
          Pesquisar
        </button>
      </div>
    );
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
        {this.generateButtonOfSearch()}
        <MapContainer data={this.state.data} addressGeolocation={this.state.addressGeolocation} />
      </div>
    );
  }
}

MapInputs.contextType = MapContext;
export default MapInputs;

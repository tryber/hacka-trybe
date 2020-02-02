import React from 'react';
import Geocode from 'react-geocode';
import MapContainer from './MapContainer';
import { MapContext } from './context/MapContext';
import FloodIcon from './icons/FloodIcon';
import ShelterIcon from './icons/ShelterIcon';
import DonationIcon from './icons/DonationIcon';
import './MapInputs.css';

class MapInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'donations',
      data: [],
      userAddress: '',
      endpoint: '',
      fullData: {},
    };
  }

  requestAPI(param, bol) {
    return fetch(
      `https://hackatrybe.herokuapp.com/${param}`,
    ).then((data) =>
      data.json().then((response) => this.changeDataset(param, response, bol)),
    );
  }

  changeDataset(param, response, bol) {
    if(bol) {
      this.setState({[param]: response, data: response})
    } else {
      this.setState({[param]: response})
    }
  }

  changeDataState(endpoint) {
    if(endpoint !== '') {
        Geocode.setApiKey('AIzaSyDg2CCtZwxt0DZXmOtT2rK4oBKzUNkfGok');
        Geocode.fromAddress(this.state.userAddress).then(
          (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            this.context.setGeolocationEndpoint({ lat, lng });
          },
          (error) => {
            console.log(error);
          },
        );
    }
  }

  changeHandler(event) {
    this.setState({ filter: event.target.value, data: this.state[event.target.value] });
  }

  componentDidMount() {
    this.requestAPI('donations', true);
    this.requestAPI('shelters', false);
    this.requestAPI('floods', false);
  }

  sendAPIAddress() {
    if (this.state.userAddress !== '') {
      this.changeDataState(this.state.userAddress);
    }
    return this.setState({ endpoint: '' });
  }

  generateButtonOfSearch() {
    return (
      <div>
        <input
          class="search-input"
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
      <div class="btn-type-group">
        <button className={"btn-type " + (this.state.filter === "donations" ? "active" : "")} value="donations" onClick={(e) => this.changeHandler(e)}>
          <DonationIcon/> Doações
        </button>
        <button className={"btn-type " + (this.state.filter === "floods" ? "active" : "")} value="floods" onClick={(e) => this.changeHandler(e)}>
          <FloodIcon/> Alagamentos
        </button>
        <button className={"btn-type " + (this.state.filter === "shelters" ? "active" : "")} value="shelters" onClick={(e) => this.changeHandler(e)}>
          <ShelterIcon/> Abrigos
        </button>
      </div>
    );
  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        <MapContainer data={this.state.data} filter={this.state.filter} />
        <div style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
          {this.generateButtonOfSearch()}
          {this.generateInputs()}
        </div>
      </div>
    );
  }
}

MapInputs.contextType = MapContext;
export default MapInputs;

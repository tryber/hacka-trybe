import React from 'react';
import Geocode from 'react-geocode';
import { Link } from 'react-router-dom';
import MapContainer from './MapContainer';
import { MapContext } from './context/MapContext';
import FloodIcon from './icons/FloodIcon';
import ShelterIcon from './icons/ShelterIcon';
import DonationIcon from './icons/DonationIcon';
import AboutIcon from './icons/AboutIcon';
import './MapInputs.css';

class MapInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'donations',
      data: [],
      userAddress: '',
      endpoint: '',
      addressGeolocation: '',
      timeout: 0,
      fullData: {},
      shouldRender: true,
    };
  }

  requestAPI(param, bol) {
    return fetch(`https://hackatrybe.herokuapp.com/${param}`).then((data) =>
      data.json().then((response) => this.changeDataset(param, response, bol)),
    );
  }
  doSearch(evt) {
    this.setState({ shouldRender: false });
    this.setState({ userAddress: evt.target.value });
    if (evt.key === 'Enter') {
      this.setState({ shouldRender: true });
      return this.sendAPIAddress();
    }
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({ shouldRender: true });
      this.sendAPIAddress();
    }, 1000);
  }

  changeDataset(param, response, bol) {
    if (bol) {
      this.setState({ [param]: response, data: response });
    } else {
      this.setState({ [param]: response });
    }
  }

  shouldComponentUpdate() {
    if (this.state.shouldRender) {
      return true;
    }
    return false;
  }
  changeDataState(endpoint) {
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
    this.setState({
      filter: event.target.value,
      data: this.state[event.target.value],
    });
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
      <div className="search-group">
        <input
          className="search-input"
          onKeyPress={(e) => this.doSearch(e)}
          type="text"
          placeholder="Ex: rua andaluzita 131 Belo Horizonte MG"
        />
      </div>
    );
  }
  generateInputs() {
    return (
      <div className="btn-type-group">
        <button
          className={
            'btn-type ' + (this.state.filter === 'donations' ? 'active' : '')
          }
          value="donations"
          onClick={(e) => this.changeHandler(e)}
        >
          <DonationIcon /> Doações
        </button>
        <button
          className={
            'btn-type ' + (this.state.filter === 'floods' ? 'active' : '')
          }
          value="floods"
          onClick={(e) => this.changeHandler(e)}
        >
          <FloodIcon /> Alagamentos
        </button>
        <button
          className={
            'btn-type ' + (this.state.filter === 'shelters' ? 'active' : '')
          }
          value="shelters"
          onClick={(e) => this.changeHandler(e)}
        >
          <ShelterIcon /> Auxílio
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <MapContainer
          data={this.state.data}
          filter={this.state.filter}
          addressGeolocation={this.state.addressGeolocation}
        />
        <div className="inputs-group">
          <div className="map-buttons">
            {this.generateButtonOfSearch()}
            {this.generateInputs()}
          </div>
          <Link className="about-us-btn" to={'/about-us'}>
          <button className="btn-type">
            <AboutIcon /> Sobre nós
          </button>
        </Link>
        </div>
      </div>
    );
  }
}

MapInputs.contextType = MapContext;
export default MapInputs;

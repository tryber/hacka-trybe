import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { MapContext } from './context/MapContext';
import shelters from './icons/shelter-map.png';
import floods from './icons/flood-map.png';
import donations from './icons/donation-map.png';
import './MapContainer.css';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      location: '',
    };
  }
  
  componentWillMount() {
    window.document.title = 'AjudaBH'; 
  }

  getMarkerIcon(filter) {
    return {
      shelters,
      floods,
      donations,
    }[filter];
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      location: props.position,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        location: '',
      });
    }
  };

  geoLocation(context) {
    if (this.state.location !== '') {
      return {
        latitude: this.state.location.lat,
        longitude: this.state.location.lng,
      };
    }
    if (this.props.addressGeolocation !== '') {
      return {
        latitude: this.props.addressGeolocation.lat,
        longitude: this.props.addressGeolocation.lng,
      };
    }
    if (context.geolocation.latitude) {
      return context.geolocation;
    }
    return { latitude: '-19.932449', longitude: '-43.939003' };
  }

  generateMarkerName(name, address, phone) {
    if (name) {
      if (phone) {
      return `${name} \n ${address} \n Telefone: ${phone}`;
      } else {
        return `${name} \n ${address}`;
      }
    }
    return address;
  }

  render() {
    const geolocation = this.geoLocation(this.context);
    return (
      <div>
        <Map
          center={{
            lat: geolocation.latitude,
            lng: geolocation.longitude,
          }}
          google={this.props.google}
          zoom={14}
          onClick={this.onMapClicked}
          mapTypeControl={false}
        >
          {this.props.data
            ? this.props.data.map((point) => {
                return (
                  <Marker
                    onClick={this.onMarkerClick}
                    key={point.updated_at}
                    title={point.address}
                    name={
                      this.generateMarkerName(
                        point.name,
                        point.address,
                        point.phone,
                      )
                    }
                    position={{ lat: point.latitude, lng: point.longitude }}
                    icon={{
                      url: this.getMarkerIcon(this.props.filter),
                      scaledSize: this.props.google.maps.Size(5, 5),
                    }}
                  />
                );
              })
            : null}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

MapContainer.contextType = MapContext;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDg2CCtZwxt0DZXmOtT2rK4oBKzUNkfGok',
})(MapContainer);

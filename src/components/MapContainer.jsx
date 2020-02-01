import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { MapContext } from './context/MapContext';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
  render() {
    const { geolocation } = this.context;
    return (
      <div>
        <Map
          initialCenter={{
            lat: geolocation.latitude,
            lng: geolocation.longitude,
          }}
          google={this.props.google}
          zoom={14}
          onClick={this.onMapClicked}
        >
          {this.props.data.map((point) => {
            return (
              <Marker
                onClick={this.onMarkerClick}
                key={point.address}
                title={point.address}
                name={point.address}
                position={{ lat: point.latitude, lng: point.longitude }}
              />
            );
          })}
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
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

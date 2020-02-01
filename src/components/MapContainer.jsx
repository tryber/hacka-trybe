import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    return (
      <div>
        <Map
          initialCenter={{
            lat: -19.9412,
            lng: -43.93128,
          }}
          google={this.props.google}
          zoom={14}
        >
          {this.props.data.map((point) => {
            return (
              <Marker
                key={point.address}
                title={point.address}
                position={{ lat: point.latitude, lng: point.longitude }}
              />
            );
          })}
          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>top</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDg2CCtZwxt0DZXmOtT2rK4oBKzUNkfGok',
})(MapContainer);

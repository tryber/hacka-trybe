import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  requestAPIFloods(param) {
    if (param !== '') {
      return fetch(`https://hackatrybe.herokuapp.com/${param}`).then((data) =>
        data.json().then((response) => this.setState({ data: response })),
      );
    }
    return [];
  }

  componentDidMount() {
    this.requestAPIFloods(this.props.filter);
  }

  shouldComponentUpdate(prevProps) {
    if(prevProps.filter !== this.props.filter) {
      console.log('passou');
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    console.log('passsssssou')
    this.requestAPIFloods(this.props.filter);
  }
  render() {
    console.log(this.props)
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
          {this.state.data.map((point) => {
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

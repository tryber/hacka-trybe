import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {

// constructor(props) {
//     super(props);
//     this.requestAPIFloods = this.requestAPIFloods.bind(this);
// }
  requestAPIFloods() {
    console.log( fetch('https://hackatrybe.herokuapp.com/floods').then((data) =>
      data.json()
    ))
  }

  componentDidMount() {
      this.requestAPIFloods()
  }
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
            {/* {this.requestAPIFloods().map((point) => {
                return <Marker title={point.address} name='s' position={`{lat: ${point.latitude}, lng: ${point.longitude}}`}/>
            })} */}
          {/*
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{lat: -19.941210, lng: -43.931286}} /> */}
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
  apiKey: 'AIzaSyDLmcsJfxSe3dvOoP_QdRENt1mP3hWfGfE',
})(MapContainer);

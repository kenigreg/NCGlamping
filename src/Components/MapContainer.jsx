import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    const { lat, long } = this.props;
    console.log(lat, long);
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: lat, lng: long }}
        />
      </div>
    );
  }
}

const mapStyles = {
  width: '100%',
  height: '100%'
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAu9M1nLTUyehmumFoP0sk6bSzMMO9Inuc'
})(MapContainer);

//export default SiteMap;

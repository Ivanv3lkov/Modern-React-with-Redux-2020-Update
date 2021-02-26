import React, { Component } from 'react';

class GoogleMap extends Component {
  
  componentDidMount() {
    new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div id="map" />;
  }
}

export default GoogleMap;

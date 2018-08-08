import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.5,
      lng: -97.5
    },
    zoom: 0
  };

  render() {
    return (
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDVpveOb7pwNDm9fll34qPkpWFdje4lxkw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'kiev'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
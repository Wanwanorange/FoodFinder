import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { selectAll } from '../selectors/place-selector';
import { connect } from 'react-redux';
import marker from '../img/marker.png';
import completedmarker from '../img/completedmarker.png';

const AnyReactComponent = ({ completed }) => (
  <div>{completed ? <img src={completedmarker}/> : <img src={marker}/>}</div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.5,
      lng: -85.5
    },
    zoom: 5
  };

  render() {
    return (
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDVpveOb7pwNDm9fll34qPkpWFdje4lxkw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.places.map((place) =>
            <AnyReactComponent 
            lat={place.latitude} 
            lng={place.longitude} 
            text={place.name}
            completed={place.completed}
            />)}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    places: selectAll(state.places)
  };
};

export default connect(mapStateToProps)(SimpleMap);
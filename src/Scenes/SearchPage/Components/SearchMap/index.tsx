import * as React from 'react';
import './style.css';
import GoogleMapReact, { Coords } from 'google-map-react';
import MiniHouse from './Components/MiniHouse';

interface SearchMapState {
  center: Coords;
  zoom: number;
}

class SearchMap extends React.Component<{}, SearchMapState> {
  constructor() {
    super();
    this.state = {
      center: {lat: 46.947922	, lng: 7.440390},
      zoom: 15
    };
  }
  onMapChange = (newMapState: SearchMapState) => {
    this.setState(newMapState);
  }
  render() {
    return (
      <div className="searchMap">
        <GoogleMapReact
          center={this.state.center}
          zoom={this.state.zoom}
          onChange={this.onMapChange}
          bootstrapURLKeys={{
            key: 'AIzaSyAsZQWg7gtPFQbiKXiG1Dg6rJkbs4DJPmA'
          }}
        >
          <MiniHouse lat={46.947922	} lng={7.440390} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SearchMap;
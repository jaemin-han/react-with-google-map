import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'
// Import sub-modules from the library (pieces - visual components [googlemap and marker])

class Map extends Component {
  render(){
    const mapContainer = <div style={{height: '100%', width: '100%'}}></div>

    return (
      <GoogleMapLoader
        containerElement = { mapContainer }
        googleMapElement = {
          <GoogleMap
            defaultZoom={15}
            defaultCenter={this.props.center}
            options={{streetViewControl: false, mapTypeControl: false}}>
          </GoogleMap>
        } />
    )
  }
}

// This component will not directly interface with the HTML (DOM)
export default Map

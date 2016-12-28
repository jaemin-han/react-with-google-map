import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'
// import './Map.css';
// Import sub-modules from the library (pieces - visual components [googlemap and marker])

class Map extends Component {
  render(){
    const mapContainer = <div style={{height: '100%', width: '100%'}}></div>

    // Go through the array and for each venue, create a marker variable with a position key
    // and getting lat and long location
    const markers = this.props.markers.map((venue, i) => {

      const marker = {
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng
        }
      }
      // Passing off a property - shorthand notation
      return <Marker key={i} {...marker} />
    })

    return (
        <GoogleMapLoader
          containerElement = { mapContainer }
          googleMapElement = {
            <GoogleMap
              defaultZoom={17}
              defaultCenter={this.props.center}
              options={{streetViewControl: false, mapTypeControl: false}}>
              { markers }
            </GoogleMap>
          } />
    )
  }
}

// This component will not directly interface with the HTML (DOM)
export default Map

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'

class App extends Component {
  render() {

    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }

    return(
      <div>
        This is the REACT APP!!
        <div style={{width:300, height:600, background:'red'}}>
          <Map center={location} />
        </div>
        <Places />
      </div>
    )
  }
}

// Find the div with this specific id -- takes over this div and render whatever REACT we have
ReactDOM.render(<App />, document.getElementById('app'))

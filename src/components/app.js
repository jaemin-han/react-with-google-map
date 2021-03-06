import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './Map/Map'
import Places from './Places/Places'
import superagent from 'superagent' //npm i -S superagent - make an api request on our behalf

import './app.css'
import './normalize.css'

class App extends Component {

  // Declare the state
  // This is where I store the value
  constructor(){
    super()
    this.state = {
      venues: []
    }
  }

  // Lifecycle method -- method that is fired by the system and not by a user
  // or user invoking action
  // When this component shows up -- it will automatically trigger
  // It just happens..yes
  componentDidMount(){
    console.log('componentsDidMount')

    // Running 4 functions chronological - chaining four function.
    // This will fire api

    // foursquare api fetch
    const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&ll=40.7575285,-73.9884469&client_id=VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD&client_secret=UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ'

    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/json')
    .end((error, response) => {

      const venues = response.body.response.venues
      console.log(JSON.stringify(venues))

      //This resets the state -- with the values from the API
      this.setState({
        venues: venues
      })
    })
  }

  render() {

    // define my current coordinate
    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }

    // const markers = [
    //   {
    //     location: {
    //       lat: 40.7575285,
    //       lng: -73.9884469
    //     }
    //   }
    // ]

    return(
      <div id="body">
        <h1 id="title">This is the REACT APP!!</h1>

        <div className="half-col">
          <div id="map">
          {/*<Map center={location}  markers={markers} />}*/}
            <Map center={location}  markers={this.state.venues} />
          </div>
        </div>


          <Places venues={this.state.venues} />

      </div>
    )
  }
}

// Find the div with this specific id -- takes over this div and render whatever REACT we have
ReactDOM.render(<App />, document.getElementById('app'))

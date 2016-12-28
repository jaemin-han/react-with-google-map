import React, { Component } from 'react'
import './Places.css';

class Places extends Component {
  render(){

    const list = this.props.venues.map((venue, i) => {
      return (
        <li key={i}>{venue.name}</li>
      )
    })

    return (
      <div id="background">
      <h2>Venues</h2>
        <ol>
          { list }
        </ol>
      </div>
    )
  }
}

// This component will not directly interface with the HTML (DOM)
export default Places

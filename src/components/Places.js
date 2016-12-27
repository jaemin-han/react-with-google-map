import React, { Component } from 'react'

class Places extends Component {
  render(){

    const list = this.props.venues.map((venue, i) => {
      return (
        <li key={i}>{venue.name}</li>
      )
    })

    return (
      <div>
      <h2>Venues</h2>
        <ol>
          {list }
        </ol>
      </div>
    )
  }
}

// This component will not directly interface with the HTML (DOM)
export default Places

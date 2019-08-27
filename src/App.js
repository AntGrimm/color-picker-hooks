import React, { Component } from 'react'
import Slider from './components/Slider'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Choose a Color!</h1>
          <Slider />
        </header>
      </>
    )
  }
}

export default App

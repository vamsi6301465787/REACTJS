import React, { Component } from 'react'
import Component2 from './Component2'

class Component1 extends Component {
  render() {
    return (
      <div>
        <Component2></Component2>
      </div>
    )
  }
}

export default Component1

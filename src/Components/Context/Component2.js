import React, { Component } from 'react'
import Component3 from './Component3'
import UserContext from './ContextCreation'

class Component2 extends Component {

    static contextType = UserContext
  render() {
    return (
      <div>
        <h1> component2 {this.context}</h1>
        <Component3></Component3>
      </div>
    )
  }
}

export default Component2

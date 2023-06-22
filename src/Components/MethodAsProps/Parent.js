import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         message: "parent"
      }

      this.handler=this.handler.bind(this)
    }

    handler(childMessage)
    {
        alert(`Hello ${this.state.message} from ${this.state.childMessage}`)
    }
    
  render() {

    return (
      <Child childhandler={this.handler}></Child>
    )
  }
}


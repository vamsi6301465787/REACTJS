import React, { Component } from 'react'

export class ElementVariable extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedIn:false
      }
    }
    
  render() {
    let Messages
    if (this.state.isloggedIn){
        Messages = <div>Welcome Vamsi(ElementVariable)</div>

    }
    else {
        Messages  = <div>Thank You for Visting(ElementVariable)</div>
    }
    return <div>{Messages}</div>
  }
}

export default ElementVariable

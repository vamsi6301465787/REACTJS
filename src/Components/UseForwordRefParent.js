import React, { Component } from 'react'
import UseForwordRef from './UseForwordRef'

class UseForwordRefParent extends Component {
    constructor(props) {
      super(props)
    
    this.inputRef=React.createRef()
    }

    clickhandler=()=>{
        this.inputRef.current.focus()
    }

  render() {
    return (
      <>
        <UseForwordRef ref={this.inputRef}></UseForwordRef>
        <button onClick={this.clickhandler}>click</button>
      </>
    )
  }
}

export default UseForwordRefParent

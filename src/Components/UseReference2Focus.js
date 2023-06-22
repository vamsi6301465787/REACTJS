import React, { Component } from 'react'
import UseReference1 from './UseReference1'

export class UseReference2Focus extends Component {
    constructor(props) {
      super(props)
    
    this.componentRef=React.createRef()
    this.clickHandler=this.clickHandler.bind(this)
    }

    clickHandler(){
        this.componentRef.current.FocusInput()
    }

  render() {
    return (
      <div>
        <UseReference1 ref={this.componentRef} ></UseReference1>
        <button onClick={this.clickHandler}>FocusInput</button>
      </div>
    )
  }
}

export default UseReference2Focus

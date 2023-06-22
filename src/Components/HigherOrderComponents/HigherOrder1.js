import React, { Component } from 'react'

export class HigherOrder1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    clickHandler(){
        this.setState((prevstate)=>(
            {
                count:prevstate.count+1
            }
        ))
    }


  render() { 
    return (
      <>
    <button onClick={this.clickHandler.bind(this)} >clicked {this.state.count} times</button>
      </>
    )
  }
}

export default HigherOrder1

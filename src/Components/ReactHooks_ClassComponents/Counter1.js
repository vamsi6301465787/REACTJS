import React, { Component } from 'react'

export class Counter1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    clickHandler=()=>{
        this.setState((prevstate)=>({
            count:prevstate.count+1
        }))
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>count {this.state.count}</button>
      </div>
    )
  }
}

export default Counter1

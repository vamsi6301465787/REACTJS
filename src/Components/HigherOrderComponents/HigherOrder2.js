import React, { Component } from 'react'

export class HigherOrder2 extends Component {
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
    const {count}=this.state
    return (
      <>
        <h1 onMouseOver={this.clickHandler}>MouseOver the heading {count} times</h1>
      </>
    )
  }
}

export default HigherOrder2

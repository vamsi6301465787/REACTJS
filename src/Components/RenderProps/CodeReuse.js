import React, { Component } from 'react'

export class CodeReuse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    clickHandler=()=>{
        this.setState((prevstate)=>{
            return { count:prevstate.count+1 }
            
        })
        
    }
  render() {
    return (
      <>
        {this.props.render(this.state.count,this.clickHandler)}
      </>
    )
  }
}

export default CodeReuse

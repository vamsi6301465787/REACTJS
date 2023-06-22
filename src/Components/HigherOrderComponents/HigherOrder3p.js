import React, { Component } from 'react'
import FunctionComp from './HigherParent'

class HigherOrder3p extends Component {
   
  render() {
    const { count,clickHandler}=this.props
    return ( <button onClick={clickHandler}>{this.props.names} clicked {count} times</button> )
  }
}

export default FunctionComp(HigherOrder3p,5)

import React, { Component } from 'react'
import FunctionComp from './HigherParent'
 
class HigherOrder4p extends Component {
  render() {
    const {count,clickHandler,name}=this.props
    return ( 
    <>
     <p onMouseOver={clickHandler}>{name} onMouseOver the heading {count} times</p>
    </>)
  }
}

export default FunctionComp(HigherOrder4p,5)

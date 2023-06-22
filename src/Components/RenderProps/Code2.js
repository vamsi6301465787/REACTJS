import React, { Component } from 'react'

export class Code2 extends Component {
    render() {
        const {count,clickHandler}=this.props
        return ( 
        <>
         <p onMouseOver={clickHandler}>onMouseOver the heading {count} times</p>
        </>)
      }
    }

export default Code2

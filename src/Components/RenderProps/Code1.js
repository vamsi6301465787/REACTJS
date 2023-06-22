import React, { Component } from 'react'

export class Code1 extends Component {
    render() {
        const { count,clickHandler}=this.props
        return ( <button onClick={clickHandler}> clicked {count} times</button> )
      }
    }

export default Code1

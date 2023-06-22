import React, { Component } from 'react'

export class RegularComponent extends Component {
    render() {
        console.log('Regular Components')
        return (
          <div>
            <h1>Regular Component {this.props.name}</h1>
          </div>
        )
      }
    }
    

export default RegularComponent

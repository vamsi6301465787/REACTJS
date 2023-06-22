import React, { Component } from 'react'
import { UserConsumer } from './ContextCreation'

class Component3 extends Component {
  render() {
    return (
      <UserConsumer>
      {
        (username)=> {
                        return <div> Hello  {username} </div> 
                     }
      }
      </UserConsumer>
    )
  }
}

export default Component3

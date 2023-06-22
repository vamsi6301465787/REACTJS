import React, { Component } from 'react'
import { UserContext1, UserContext2 } from '../../../App'


class Compo3 extends Component {
  render() {
    return (
      <div>
        <UserContext1.Consumer> 
            
            {
                username=>{
                    return(
                        <UserContext2.Consumer>
                        {
                            username1=>{
                                return ( <div><h1> UserContext1---{username}<br></br>UserContext2---{username1}</h1></div> )
                            }
                        }
                        </UserContext2.Consumer>
                        
                    )
                }
            }
        
        </UserContext1.Consumer>
      </div>
    )
  }
}

export default Compo3

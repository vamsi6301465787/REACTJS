import React, { Component } from 'react'

class IfElse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
   if(this.state.isLoggedIn){
    return(
        <div>Welcome Vamsi</div>
    )
   }
   else {
    return(
        <div>Thank You for Visting</div>
    )
   }
  }
}

export default IfElse

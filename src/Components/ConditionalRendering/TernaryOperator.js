import React,{Component} from 'react'

class TernaryOperator extends Component{
    constructor(props){
        super(props)
        
      this.state={
        isloggedIn:true

      }
    }
   
    
    render(){
        
        return(
            this.state.isloggedIn ? (<div>Welcome vamsi(TernaryOperator)</div>) : (<div>Thank you for visting(TernaryOperator)</div>)
          
        )
    }

}
export default  TernaryOperator 


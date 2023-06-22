import React,{Component} from 'react'

class ShortCruit  extends Component{

    constructor(props){
        super(props)
        this.state={
            isloggedIn:false
        }
    }
    render(){
        
        return(
            this.state.isloggedIn &&  <div>Welcome vamsi(ShortCruitOperator)</div>
        )
    }

}
export default ShortCruit 
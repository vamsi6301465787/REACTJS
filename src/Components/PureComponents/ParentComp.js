import React, { Component} from 'react'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'


class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'vamsi'
      }
    }
   
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'vamsi...'
                
            })
            
        },2000)
    }

  render() {
    console.log('*******************Parent Components**************************')
    return (
      <div>
        Parent Component
       <PureComp name={this.state.name}></PureComp>
       <RegularComponent name={this.state.name}></RegularComponent>
       
      </div>
    )
  }
}

export default ParentComp

import React, { Component } from 'react'
import MemoCom from './MemoCom'

export class ParentCom1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'vamsi'
      }
    }
  
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'vamsi'

            })
        },2000)
    }
  render() {
    console.log('***************Parent Component***************')
    return (
      <div>
        Parent Component
        <MemoCom name={this.state.name}></MemoCom>
      </div>
    )
  }
}

export default ParentCom1

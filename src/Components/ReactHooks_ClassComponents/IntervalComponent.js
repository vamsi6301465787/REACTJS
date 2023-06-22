import React, { Component } from 'react'

export class IntervalComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0
      }
    }
    componentDidMount(){
        console.log('setInterval--1000')
        this.interval=setInterval(this.trick,1000)
    }

    trick=()=>{
        this.setState(()=>({
            count:this.state.count+1
        }))
    }

    componentWillUnmount(){
        console.log('clear-setInterval--1000')
        clearInterval(this.interval)
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

export default IntervalComponent

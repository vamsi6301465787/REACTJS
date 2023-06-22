import React, { Component } from 'react'

export class MousePosition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }
    logMousePosition=(e)=>
    {
        this.setState({ x:e.clientX,y: e.clientY})

    }
    componentDidMount(){
        console.log('mouse position')
        window.addEventListener('mousemove',this.logMousePosition)
    }

  //   componentWillUnmount(){
  //     window.removeEventListener('mousemove',this.logMousePosition)
  // }
  
  render() {
    return (
      <div>
        x--{this.state.x}<br></br>
        y--{this.state.y}
      </div>
    )
  }
}

export default MousePosition

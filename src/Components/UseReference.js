import React, { Component } from 'react'

export class UseReference extends Component {
    constructor(props) {
      super(props)
     this.inputRef=React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    handlerClick=()=>{
        alert(`${this.inputRef.current.value}`)
    }
  render() {
    return (
      <>
         <input type='text' ref={this.inputRef} ></input>
         <button onClick={this.handlerClick}>Click</button>
      </>
    )
  }
}

export default UseReference

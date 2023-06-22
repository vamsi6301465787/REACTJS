import React, { Component } from 'react'

export class UseReference1 extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef()
    }

    FocusInput(){
        this.inputRef.current.focus()
    }


   

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
      </div>
    )
  }
}

export default UseReference1

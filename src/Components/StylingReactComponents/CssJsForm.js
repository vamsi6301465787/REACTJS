import React, { Component } from 'react'

export class CssJsForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         age:'',
         email:''
      }
    }
    
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    handleAgeChange=(event)=>{
        this.setState({
            age:event.target.value
        })
    }

    handleEmailChange=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    handleSubmitChange=(event)=>{
        alert(`${this.state.username} ${this.state.age} ${this.state.email}`)
        event.preventDefault()
    }
    
  render() {
    const {username ,age,email} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmitChange}>
            <label>username </label>
            <input type='text' value={username} onChange={this.handleUsernameChange}></input>
            <label>age </label>
            <input type='number' value={age} onChange={this.handleAgeChange}></input>
            <label>Email </label>
            <input type='email' value={email} onChange={this.handleEmailChange}></input>
            <button type='submit' >submit</button>
        </form>

      </div>
    )
  }
}

export default CssJsForm

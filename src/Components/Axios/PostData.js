import axios from 'axios'
import React, { Component } from 'react'

export class PostData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }
    
    clickhandler=(e)=>{
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }

    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }

  render() {
    const {userId,title,body} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type='text' name='userId' value={userId} onChange={this.clickhandler}></input>
            </div>
            <div>
                <input type='text' name='title' value={title} onChange={this.clickhandler}></input>
            </div>
            <div>
                <input type='text' name='body' value={body} onChange={this.clickhandler}></input>
            </div>
            <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default PostData

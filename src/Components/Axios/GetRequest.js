import React, { Component } from 'react'
import axios from 'axios'

class GetRequest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errormsg:''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error)
            this.setState({errormsg:'Error in display data'})
        })
    }
  render() {
    const { posts ,errormsg} = this.state
    return (
      <>
      {
        posts.length ? posts.map(post =><div key={post.id} >{post.id} ===== {post.title}</div>)  : null

      }
      { errormsg ? <div>{errormsg}</div> : null }
      </>
    )
  }
}

export default GetRequest

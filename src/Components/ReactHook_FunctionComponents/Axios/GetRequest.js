import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetRequest() {
  const [post,setpost] =useState({})
  const [id,setId] =useState(1)
  const [idClickedFromButton,setIdClickedFromButton] =useState(1)
  
  const clickhandler =()=>{
    setIdClickedFromButton(id)
  }

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idClickedFromButton}`)
    .then(res=>{
        console.log(res.data)
        setpost(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
  },[idClickedFromButton])
  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)}/><br></br>
        <button type='button' onClick={clickhandler}>Get By Id</button>
        <div>{post.title}</div>

        {/* <ul>
            {
            posts.map(post=><li key={post.id}>{post.title}</li>)
            }
        </ul> */}
    </div>
  )
}

export default GetRequest
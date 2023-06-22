import { useState,useEffect } from "react"
import React from 'react'

function FuseEffect() {
    const [count, setCount]= useState(0)

    useEffect(()=>{
        document.title=`clicked ${count} times`
    })

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>click-{count}</button>

    </div>
  )
}

export default FuseEffect
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function FuseRef() {
    const inputRef =useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })

  return (
   
    <div>
       <input type='text'  ref={inputRef} placeholder='Enter your name'></input>
    </div>
  )
}

export default FuseRef
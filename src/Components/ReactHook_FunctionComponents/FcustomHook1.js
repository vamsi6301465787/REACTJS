import React from 'react'
import { useState } from 'react'
import useCustomHook2 from './useCustomHook2'

function FcustomHook1() {
    const [count,setCount]=useState(0)

    const clickHandler=()=>{
        setCount(count+1)
    }
    
    useCustomHook2(count)
    
    // useEffect(()=>{
    //     document.title=`count--${count}`
    // },[count])

  return (
    <div>
        <button onClick={clickHandler}><h1>count--{count}</h1></button>
    </div>
  )
}

export default FcustomHook1
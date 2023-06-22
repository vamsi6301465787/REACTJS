import React, { useEffect, useState } from 'react'

function FintervalComponent() {
    const [count,setcount]=useState(0)

    const trick=()=>{
        setcount(count+1)
    }

    useEffect(()=>{
        const interval=setInterval(trick,1000)

        return ()=>{
            clearInterval(interval)
        }

    },)

  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default FintervalComponent
import React, { useEffect, useState } from 'react'

function FMousePostion() {
    const [x,setx]=useState(0);
    const [y,sety]=useState(0);
    
    const logMousePosition=(e)=>{
        console.log('mouse position')
        setx(e.clientX)
        sety(e.clientY)

    }
    useEffect(()=>{
        console.log('useEffect is called')
        window.addEventListener('mousemove',logMousePosition)
    })
  return (
    <div>
      X--{x},Y--{y}
    </div>
  )
}

export default FMousePostion
import React, { useEffect, useState } from 'react'

function FuseEffectUnmount() {

    const [x,setx]=useState(0);
    const [y,sety]=useState(0);
    

    const logMousePosition=(e)=>{
        setx(e.clientX)
        sety(e.clientY)
    }

  

    useEffect(()=>{
        console.log('useEffect----updating mouse position')
        window.addEventListener('mousemove',logMousePosition)

        return ()=>{
            console.log('useEffect---mouse position  is unmount')
            window.removeEventListener('mousemove',logMousePosition)
        }

    })
  return (
    <div>
        X---{x}<br></br>Y---{y}
    </div>
  )
}

export default FuseEffectUnmount
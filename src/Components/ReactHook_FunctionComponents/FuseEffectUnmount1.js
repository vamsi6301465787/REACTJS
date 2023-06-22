import React,{ useState } from 'react'
import FuseEffectUnmount from './FuseEffectUnmount';

function FuseEffectUnmount1() {
    const[display,setdisplay]=useState(true);
  return (
    <div>
        <button onClick={()=>setdisplay(!display)}>Toggle Display</button>
        { display && <FuseEffectUnmount></FuseEffectUnmount>}
    </div>
  )
}

export default FuseEffectUnmount1
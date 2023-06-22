import React,{useState} from 'react'

function Fcounter2() {

    const initialCount=0;
    const [count,setCount]=useState(0)
  return (
    <div>
        count-{count}
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(prevState=>prevState+1)}>Increment</button>
        <button onClick={()=>setCount(prevState=>prevState-1)}>Decrement</button>
        <button onClick={()=>setCount(prevState=>prevState+5)}>Increment by 5</button>
    </div>
  )
}

export default Fcounter2
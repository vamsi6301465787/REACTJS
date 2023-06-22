import React,{useContext} from 'react'
import { CountText } from '../../../App'


function Counter1() {
    const countContext= useContext(CountText)
  return (
    <div>Counter1---{countContext.countState}
        <button onClick={()=>countContext.countdispatch('increment')}>increment</button>
        <button onClick={()=>countContext.countdispatch('decrement')}>decrement</button>
        <button onClick={()=>countContext.countdispatch('reset')}>reset</button>
    </div>
  )
}

export default Counter1
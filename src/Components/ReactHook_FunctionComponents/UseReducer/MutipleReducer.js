import React, { useReducer } from 'react'
const initialState=0
const reducer=(state,action)=>
{
    switch(action)
    {
        case 'increment': 
            return state+1
        case 'decrement': 
            return state-1
        case 'reset': 
            return initialState
        default :
            return state
    }
}

function MutipleReducer() {
    const [count,dispatch] = useReducer(reducer,initialState)
    const [count1,dispatch1] = useReducer(reducer,initialState)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch('increment')}>increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
        <h1>{count1}</h1>
        <button onClick={()=>dispatch1('increment')}>increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
        <button onClick={()=>dispatch1('reset')}>reset</button>

    </div>
  )
}
export default MutipleReducer
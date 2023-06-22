import React, { useReducer } from 'react'

const initialCount={
    firstCount:0,
    secondCount:10
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'increment' :
            return {...state,firstCount :state.firstCount+action.value}
        case 'decrement' :
            return {...state,firstCount :state.firstCount-action.value}
        case 'reset' :
            return initialCount
        case 'increment5' :
            return {...state,firstCount :state.firstCount+action.value}
        case 'increment2' :
            return {...state,secondCount :state.secondCount+action.value}
        case 'decrement2' :
            return {...state,secondCount :state.secondCount-action.value}
        case 'increment2-5' :
            return {...state,secondCount :state.secondCount+action.value}
        default:
            return state
    }

}

function UseReducer2() {

    const [count,dispatch]=useReducer(reducer,initialCount)
    
  return (
    <div>
        <h1>FirstCounter--{count.firstCount }</h1>
        <h1>FirstCounter--{count.secondCount }</h1>
        <button onClick={()=>dispatch({type:'increment',value:1})}>increment</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>
        <button onClick={()=>dispatch({type:'increment5',value:5})}>increment5</button>
        <button onClick={()=>dispatch({type:'increment2',value:1})}>increment2</button>
        <button onClick={()=>dispatch({type:'decrement2',value:1})}>decrement2</button>
        <button onClick={()=>dispatch({type:'increment2-5',value:5})}>increment2-5</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>

    </div>
  )
}

export default UseReducer2
import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState ={
    loading:true,
    error:'',
    post:{} 
    
   
}

const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'success' :
            return {
                 loading:false,
                 post:action.payload,
                 error: ''

            }
        case 'failure':
            return {
                loading:false,
                post:{},
                error:'something went wrong'
            }
        default:
            return state
    }

}


function UseReducerFechingData() {
    const [state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            console.log(res.data)
            dispatch({type:'success',payload:res.data})
            
        })
        .catch(error=>{
            console.log(error)
            dispatch({type:'failure'})
        })
    },[])
    


 

  return (
    <div>
        {state.loading? 'loading' : state.post.title}
        {state.error? state.error :null}
    </div>
  )
}

export default UseReducerFechingData
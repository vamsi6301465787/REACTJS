import React from 'react'

const UseForwordRef=React.forwardRef((props,ref)=>{
    return(
        <>
           <input type='text' ref={ref}></input>
        </>
    )
})

export default UseForwordRef
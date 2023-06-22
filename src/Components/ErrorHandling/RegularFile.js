import React from 'react'

function RegularFile(props) {
    if(props.name === 'deepak'){
        throw new Error('not this name');
    }
    
  return (
    <>
        <h1>{props.name}</h1>
    </>
  )
}

export default RegularFile
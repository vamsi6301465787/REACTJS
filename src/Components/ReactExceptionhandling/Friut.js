import React from 'react'

function Friut({fruit}) {
    if (fruit ==='apple')
    {
        throw new Error("Exception rises")
         
    }
  return (
    <div><h1>Friut value :::::{fruit}</h1></div>
  )
}

export default Friut
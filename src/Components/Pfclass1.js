// props with functional components

import React from 'react'

function Pfclass1(props) {
  return (
    <div>
      <h1>This is {props.name}</h1>
      {props.children}
    </div>
  )
}

export default Pfclass1
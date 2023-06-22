// eventhandler with functional component

import React from 'react'

function Eventhandler() {
    
    function Eventhandler(){
       console.log('clicked button')
    }
  return (
    <div>
        <button onClick={Eventhandler}>click</button>
    </div>
  )
}

export default Eventhandler
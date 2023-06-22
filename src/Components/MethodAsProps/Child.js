import React from 'react'

function Child(props) {
  return (
    <div>
         {/* 1 */}

        {/* <button onClick={props.childhandler}>
            click
        </button> */}

        {/* 2 */}

        <button onClick={()=>{this.childhandler('child')}}>
            click
        </button>
    </div>
  )
}

export default Child
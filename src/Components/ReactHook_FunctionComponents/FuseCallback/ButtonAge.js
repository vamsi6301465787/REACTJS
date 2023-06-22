import React from 'react'

function ButtonAge({age1,children}) {
    console.log('rendering-----',children)
  return (
    <div><button onClick={age1}>{children}</button></div>
  )
}

export default React.memo(ButtonAge)
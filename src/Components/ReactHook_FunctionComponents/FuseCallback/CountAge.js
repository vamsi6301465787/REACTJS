import React from 'react'

function CountAge({value1,text}) {
   console.log(`rendering-------${text}`)
  return (
    <div>{text}--{value1}</div>
  )
}

export default React.memo(CountAge)
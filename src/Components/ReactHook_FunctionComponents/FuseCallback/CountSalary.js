import React from 'react'

function CountSalary({text,value2}) {
    console.log('rendering-----salary')
  return (
    <div>{text}--{value2}</div>
  )
}

export default React.memo(CountSalary)
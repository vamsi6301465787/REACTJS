import React from 'react'

function ButtonSalary({salary1,children}) {
    console.log('rendering-----buttonsalary')
  return (
    <div><button onClick={salary1}>{children}</button></div>
  )
}

export default React.memo(ButtonSalary)
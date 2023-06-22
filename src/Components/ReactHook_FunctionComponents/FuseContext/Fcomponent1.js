
import React, { useContext } from 'react'
import { UserContext3, UserContext4 } from '../../../App'

function Fcomponent1() {
    const user1=useContext(UserContext3)
    const user2=useContext(UserContext4)
  return (
    <div>
      <h1>{user1}--{user2}</h1>
    </div>
  )
}

export default Fcomponent1
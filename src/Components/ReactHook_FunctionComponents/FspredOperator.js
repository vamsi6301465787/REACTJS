import React ,{useState} from 'react'

function FspredOperator() {

    const [name,setname]=useState({firstname:'',lastname:''})
  return (
    <div>
       <input type='text' value={name.firstname} onChange={e=>setname({...name,firstname:e.target.value})}></input><br></br>
       <input type='text' value={name.lastname} onChange={(e)=>setname({...name,lastname:e.target.value})}></input><br></br>
       firstname-------{name.firstname}<br></br>
       lastname--------{name.lastname}
    </div>
  )
}

export default FspredOperator
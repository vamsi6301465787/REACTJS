import React ,{useState}from 'react'

function Farray() {

    const [items,setitems]=useState([])

 const additems=()=>{
    setitems([...items,{ 
        id:items.length,
        value:Math.floor(Math.random()*10)+1
    }])
 }

  return (
    <div>
        <button onClick={additems}>Add Items</button>
        <ul>
            {
                items.map(item=><li key={item.id} >{item.value}</li>)
            }
        </ul>
    </div>
  )
}

export default Farray
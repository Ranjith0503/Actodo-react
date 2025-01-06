import React, { useState } from 'react'


function Activity(props) {
  const arrayitem=props.arrayitem
  const setarryitem=props.setarryitem

  const[newitem,setnewitem]=useState("")
  function changeitem(event){
    setnewitem(event.target.value)
  }
  function additem(){
    setarryitem([...arrayitem,{id:arrayitem.length+1,activity:newitem}])
    setnewitem("")
  }
  
  return (
    <div className='flex flex-col gap-3'>
        <h2 className='text-2xl font-medium'>Manage Activities</h2>
        <div className='flex flex-col md:flex md:flex-row '>
            <input value={newitem} onChange={changeitem} placeholder='Next Activity?'className='border border-black p-1'></input>
            <button className='bg-black text-white p-1 border border-black' onClick={additem}>Add</button>
        </div>
    </div>
  )
}

export default Activity

import Activity from './Activity'
import Today from './Today'
import { useState } from 'react'

function TodoContainer() {

   const[arrayitem,setarryitem]=useState([
    
    {id:1,activity:"Wake at the morning"},
    {id:2,activity:"go for a walk"},
    ])
  
  
  return (
    <div>
       <div className='flex gap-5 flex-wrap'>
       <Activity arrayitem={arrayitem}setarryitem={setarryitem} />
       <Today arrayitem={arrayitem}setarryitem={setarryitem} />
       </div>
    </div>
  )
}

export default TodoContainer
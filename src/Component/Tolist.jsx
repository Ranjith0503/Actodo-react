import React from 'react'

function Tolist(props) {
  const arrayitem=props.arrayitem;
  const setarrayitem=props.setarrayitem;
  
    function handledelete(deleteid){
     var temparray=arrayitem.filter(function(item){
      if(item.id==deleteid){ 
        return false
      }
      else{
        return true
      }
     })
     setarrayitem(temparray)
    }
    return (
    <div className='flex justify-between'>
        <p>{props.index+1}. {props.activity}</p>
        <button className="text-red-500" onClick={()=>handledelete(props.id)}>Delete</button>
    </div>
  )
}

export default Tolist
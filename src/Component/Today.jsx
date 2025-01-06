import React, {useState} from "react"
import Tolist from "./Tolist"


function Today(props) {
  const arrayitem=props.arrayitem
  const setarryitem=props.setarryitem

  return (
    <div className='bg-[#9789e7] flex-grow border rounded-md p-1'>
        <h1 className='font-medium text-2xl'>Today's Activity</h1>
        {
         arrayitem.length==0?<p>You haven't added any activity yet</p>:""
        }
         {
         arrayitem.map(function(item,index){
          return(
            <Tolist key={index} id={item.id} activity={item.activity} index={index} arrayitem={arrayitem} setarrayitem={setarryitem} />
          )
         })
         }
    </div>
  )
}

export default Today
import React from 'react'
import Card from './Card'

function Tcard() {
  return (
    <div className='flex justify-between flex-wrap my-7 gap-5'>
    <Card title="23°" subtitle="Chennai" style={{backgroundColor:"#8272DA"}}/>
    <Card title="December" subtitle="14:23:08" style={{backgroundColor:"#FC6662"}} />
    <Card title="BuildUsing" subtitle="React" style={{backgroundColor:"#FCA202"}} />
 </div>
  )
}

export default Tcard
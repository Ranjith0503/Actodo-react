import React from 'react'



function Header(props) {
  return (
    
        <div>
            <h3 className='font-medium text-2xl'>Hello {props.uname} :)</h3>
            <p>I help you to manage your activities :)</p>
        </div>

  )
}

export default Header
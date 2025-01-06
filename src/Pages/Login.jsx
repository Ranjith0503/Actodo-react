import React, { useState } from 'react'
import Signup from './Signup'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import { useNavigate } from 'react-router-dom'

function Login(props) {
  const users=props.users
  const setusers=props.setusers
  const navigate=useNavigate()
  
const [euser,seteuser]=useState("")
  function eusern(event){
    seteuser(event.target.value)
    
  }
  const [epass,setepass]=useState("")
  function euserp(event){
    setepass(event.target.value)
    
  }
  const [ruser,setruser]=useState(true)

  function checkUser(){
    var userfound=false
    users.forEach(function(item){
  
      if(item.username==euser && item.password==epass){
       console.log("login successfully")
       userfound=true
       navigate("/landing",{state:{users:euser}})
      } 
    })
    if(userfound===false){
      console.log("Try again")
      setruser(false)
    }
}

  return (
    <div className='bg-black p-10 '>
    
        <div className='p-12 text-black bg-slate-200 border rounded-md'>
            <h2>Hey Hi,</h2>
           {
            ruser? <p>I'm here to help you to manage your activities after you login :)</p> : <p className='text-red-500'>You have to sing up at first.</p>
           }
            <input placeholder='username'className='my-2 border border-black rounded' onChange={eusern} value={euser}></input> <br />
            <input placeholder='password'className='my-2 border border-black rounded' onChange={euserp} value={epass}></input> <br />
            <button className='bg-indigo-500  px-3 border rounded' onClick={checkUser}>Login</button>
            <p>Don't have an accont? <span className='underline'> <Link to={"/signup"}>Sing up</Link> </span></p>
        </div>
    </div>
  )
}

export default Login
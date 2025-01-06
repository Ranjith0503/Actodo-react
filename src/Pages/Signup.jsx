import React, { useState } from 'react'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import { useNavigate } from 'react-router-dom'

function Signup(props) {
  const navigate=useNavigate()
  const users=props.users
  const setusers=props.setusers

  const [cuser,setcuser]=useState("")

  function newUser(event){
    setcuser(event.target.value)
    console.log(event.target.value)
  }

  const [cpass,setcpass]=useState("")
  const [rpass,setrpass]=useState("")
  
  function newPass(event){
    setcpass(event.target.value)
    console.log(event.target.value)
  }

  function repass(event){
    setrpass(event.target.value)
  }

  function signup(){
    if(cpass==rpass){
    setusers([...users,{username:cuser,password:cpass}])
    alert("You can login now")
    navigate("/")}
    else{
      alert("confirm password doesn't match with password")
    }
  }

  return (
    <div className='bg-black p-10 '>
    
    <div className='p-12 text-black bg-slate-200 border rounded-md'>
        <h2>Hey Hi,</h2>
        <p> You can sign up here :)</p>
        <input placeholder='username'className='my-2 border border-black rounded' onChange={newUser} value={cuser}></input> <br />
        <input placeholder='password'className='my-2 border border-black rounded' onChange={newPass} value={cpass}></input> <br />
        <input placeholder='confirm password'className='my-2 border border-black rounded' value={rpass} onChange={repass}></input> <br />
        <button className='bg-orange-500  px-3 border rounded' onClick={ signup}>Sing up</button>
        <p>Already, have an account?<span className='underline'> <Link to={"/"}>Login</Link> </span></p>
    </div>
</div>
  )
}

export default Signup
import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Landing from './Pages/Landing'
function App() {
     const [users,setusers]=useState([{
        username:"Ranjith",
        password:"1234@"
      }])
    
return (
 <div>
<BrowserRouter>
<Routes>
<Route path="/" element={<Login users={users} setusers={setusers} />}></Route>
<Route path="/signup" element={<Signup users={users} setusers={setusers}/> }></Route>
<Route path="/landing" element={<Landing/>}></Route>
</Routes>  
</BrowserRouter>
</div>
)
}

export default App


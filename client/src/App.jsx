import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './home/Home'
import Navbar from './home/Navbar'
import Donate from './home/section/donate'
import Needblood from './home/section/Needblood'
import Login from './data_section/Login'
import Signin from './data_section/Signin'
import Doner from './home/section/Doner'
import Bloodinfo from './home/section/Bloodinfo'
import About from './home/section/About'
import Registerform from './home/section/Registerform'
import Profile from './home/section/Profile'
import Organizationdashboard from './home/section/Orgdashboard'
const App = () => {
  return (
    <div>
       <Router>
      <Routes>
         
       
        <Route path="/" element={<Home/>}/> 
        <Route path="navbar" element={<Navbar/>}/> 
        <Route path="donate" element={<Donate/>}/> 
        <Route path="doner" element={<Doner/>}/>
        <Route path="needblood" element={<Needblood/>}/>
        <Route path="bloodinfo" element={<Bloodinfo/>}/>
        <Route path="signin" element={<Signin/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="registerform" element={<Registerform/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="organizationdashboard" element={<Organizationdashboard/>}/>

        
        
       
      </Routes>
    </Router>
   
    </div>
  )
}

export default App

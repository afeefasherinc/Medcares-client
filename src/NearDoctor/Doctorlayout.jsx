import React from 'react'
import Doctorsidebar from './Doctorsidebar'
import { Outlet } from 'react-router-dom'

const Doctorlayout = () => {
  return (
    <div style={{display:"flex",}}>
        
    <Doctorsidebar/>
      <div style={{backgroundColor:"rgb(9,213,133)",padding:"20px",width:"100%"}} className="">
        <Outlet/>
      </div>
  
    </div>
  )
  }
export default Doctorlayout

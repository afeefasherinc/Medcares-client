import React from 'react'
import Staffsidebar from '../staffsidebar/Staffsidebar'
import { Outlet } from 'react-router-dom'

const Stafflayout = () => {
  return (
    <div style={{display:"flex",}}>
        
  <Staffsidebar/>
    <div style={{backgroundColor:"rgb(9,213,133)",padding:"20px",width:"100%"}} className="">
      <Outlet/>
    </div>

  </div>
)
}

export default Stafflayout

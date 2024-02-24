import React from 'react'
import Pharmacysidebar from './Pharmacysidebar'
import { Outlet } from 'react-router-dom'

const Pharmacylayout = () => {
    return (
        <div style={{display:"flex",}}>
            
        <Pharmacysidebar/>
          <div style={{backgroundColor:"rgb(9,213,133)",padding:"20px",width:"100%"}} className="">
            <Outlet/>
          </div>
      
        </div>
      )
      }
    

export default Pharmacylayout

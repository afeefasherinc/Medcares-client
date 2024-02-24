import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import AdminSideBar from '../AdminSideBar/AdminSideBar'

function Layout() {
   const navigate = useNavigate();
    const { isAuthenticated } = localStorage.getItem('token');;
    if (!isAuthenticated) {
      // navigate("/register");
    }
 return (
    <div style={{display:"flex",}}>
        
      <AdminSideBar/>
      <div style={{backgroundColor:"rgb(9,213,133)",padding:"20px",width:"100%"}} className="">
        <Outlet/>
      </div>

    </div>
  )
}

export default Layout








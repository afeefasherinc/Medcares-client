import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSideBar from '../AdminSideBar/AdminSideBar'
import './Layout.css'

function Layout() {
  return (
    <div>
        
      <AdminSideBar/>
      
      <div className='Lay' >
        <Outlet/>
      </div>

    </div>
  )
}

export default Layout

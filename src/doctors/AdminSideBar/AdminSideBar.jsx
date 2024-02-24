import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './AdminSideBar.css'

function AdminSideBar() {
  return (
  

       <div  className="color" >
       {/* <Link to={'/admin/home'}>
       dfdfffdf
      
       <h1>Home</h1>
       </Link> */}
       <Link to={'/admin/profile'}>
       <h1>Profile</h1>
       </Link>
       <Link to={'/admin/doctors'}>
       <h1>ijijiijiojiojis</h1>
       </Link>
      
       <Link to={'/admin/staffs'}>
       <h1>Staff</h1>
       </Link>
       <Link to={'/admin/departments'}>
       <h1>Department</h1>
       </Link>
      
     </div>
 
  )
}

export default AdminSideBar

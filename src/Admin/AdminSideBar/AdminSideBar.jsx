import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './AdminSideBar.css'
import Dropdown from 'react-bootstrap/Dropdown';

function AdminSideBar() {
  return (

    <div style={{ width: "300px", height: "5000px", display: "flex", flexDirection: "column", gap: "30px", padding: "50px 50px" }} className="sidebar" >
      {/* <Link to={'/admin/home'} className='link'>
       <h1 className='size'>Home</h1>
       </Link> */}
      <Link to={'/admin/profile'} >
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className='toggle' >
            <h1 className='size'>Profile</h1>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">View</Dropdown.Item>


          </Dropdown.Menu>
        </Dropdown>
      </Link>

      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className='toggle'>
          <h1 className='size'>Doctors</h1>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Link to={'/admin/doctors'} className='link'>
            <Dropdown.Item href="#/action-1">View</Dropdown.Item>
          </Link>
          <Link to={'/admin/doctors/createdoctor'} className='link'>
            <Dropdown.Item href="#/action-1">CreateDoctor</Dropdown.Item>
          </Link>

        </Dropdown.Menu>
      </Dropdown>

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className='toggle'>
            <h1 className='size'>Staff</h1>
          </Dropdown.Toggle>
          <Dropdown.Menu>
      <Link to={'/admin/staffs'} className='link'>
            <Dropdown.Item href="#/action-1">View</Dropdown.Item>
            </Link>
            <Link to={'/admin/staffs/createstaffs'} className='link'>
            <Dropdown.Item href="#/action-1">CreateStaff</Dropdown.Item>
            </Link>

          </Dropdown.Menu>
        </Dropdown>
      

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className='toggle'>
            <h1 className='size'>Department</h1>
          </Dropdown.Toggle>
          <Dropdown.Menu>
      <Link to={'/admin/departments'} className='link'>
            <Dropdown.Item href="#/action-1">View</Dropdown.Item>
            </Link>
            <Link to={'/admin/departments/createdepartment'} className='link'>
            <Dropdown.Item href="#/action-1">CreateDepartment</Dropdown.Item>
            </Link>

          </Dropdown.Menu>
        </Dropdown>

      
         <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className='toggle'>
            <h1 className='size'>Pharmacy</h1>
          </Dropdown.Toggle>
          <Dropdown.Menu>

      <Link to={'/admin/pharmacy'} className='link'>
            <Dropdown.Item href="#/action-1">View</Dropdown.Item>
            </Link>

            <Link to={'/admin/pharmacy/createpharmacy'} className='link'>
            <Dropdown.Item href="#/action-1">CreatePharmacy</Dropdown.Item>
            </Link>
     
          </Dropdown.Menu>
        </Dropdown> 
         {/* <Dropdown.Item href="#/action-1">View</Dropdown.Item>
        <Link to={'/admin/ViewAppointment'} >
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className='toggle' >
            Appointment
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {/* <Dropdown.Item href="#/action-1">View</Dropdown.Item>
 */}

          {/* </Dropdown.Menu>
        </Dropdown>
      </Link> */}

<Link to='/admin/ViewAppointment'>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className='toggle' >
            <h1 className='size'>Appointment</h1>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">View</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Link>
         

        

      

    </div>

  )
}

export default AdminSideBar

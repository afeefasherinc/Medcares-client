import React from 'react'
import './Staffsidebar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'

const Staffsidebar = () => {
  return (
    
    <div style={{ width: "300px", height: "700px", display: "flex", flexDirection: "column", gap: "30px", padding: "50px 50px" }} className='staffsidebar'>
       <Link to={'/stafflogin'} >
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className='toggle' >
            <h1 className='size'>Login</h1>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">View</Dropdown.Item>


          </Dropdown.Menu>
        </Dropdown>
      </Link>
    </div>
  )
}

export default Staffsidebar

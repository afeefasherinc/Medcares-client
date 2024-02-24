
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'

const Doctorsidebar = () => {
  return (
    <div style={{ width: "300px", height: "1000px", display: "flex", flexDirection: "column", gap: "30px", padding: "50px 50px" }} className='staffsidebar'>
      {/* <Link to={'/doc/doctorlogin'} >
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className='toggle' >
            <h1 className='size'>Login</h1>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">View</Dropdown.Item>


          </Dropdown.Menu>
        </Dropdown>
      </Link> */}
      <Link to={'/doc/prescription'} >
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className='toggle' >
            <h1 className='size'>Prescription</h1>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">View</Dropdown.Item>


          </Dropdown.Menu>
        </Dropdown>
      </Link>
      <Link to={'/doc/list'} >
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className='toggle' >
            <h1 className='size'>List</h1>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">View</Dropdown.Item>


          </Dropdown.Menu>
        </Dropdown>
      </Link>
    </div>
  )
}

export default Doctorsidebar

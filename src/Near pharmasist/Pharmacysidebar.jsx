import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import './Pharmacysidebar.css'

const Pharmacysidebar = () => {
  return (
    <div style={{ width: "300px", height: "900px",backgroundColor:"black", display: "flex", flexDirection: "column", gap: "30px", padding: "50px 50px" }} >
       <Link to={'/nearpharmacy/prescriptionlist'} >
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className='toggle' >
            <h1 className='size'>Prescription list</h1>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">View</Dropdown.Item>


          </Dropdown.Menu>
        </Dropdown>
      </Link>
    </div>
  )
}

export default Pharmacysidebar

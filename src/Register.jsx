import React, { useState } from 'react'
import axios from 'axios'
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register= () => {
  const navigate=useNavigate()
  const[data,setData]=useState('')
  let handleSubmit=async(e)=>{
      e.preventDefault()
            try{
            let response= await axios.post('http://localhost:5000/api/admin/register',data)
            console.log(response.data,'response');
            toast.success(' Succesfully Registered')

            navigate('/admin-login')
            }catch(error){
              toast.error(error.response.data.message ||'Registration failed. Please try again.');
                console.log(error.response.data.message,'eee');
            }
        
    }
    let handlechange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    console.log(data);

    // let handler =()=>{
    //     navigate("/Adminlogin")

    
  return (
    <section className='sections'>

    <div className='heads'>
      
        
      <form onSubmit={handleSubmit}>
      <h2>Register page</h2><br />
      <input type="text" className='in' onChange={handlechange} name='firstname' placeholder='First Name' id=''/><br /><br />
      <input type="text" className='in' onChange={handlechange} name='lastname' placeholder='Last Name' id=''/><br /><br />
        <input type="text" className='in' onChange={handlechange} name='username' placeholder='Username' id=''/><br /><br />
        <input type="email" className='in'onChange={handlechange} name='email' placeholder='email' id=''/><br /><br />
        
        <input type="password" className='in' onChange={handlechange} name='password' placeholder='password' id=''/>
        <div>
       
        </div>
            <button className= 'reg'>Register</button>
            <button><Link href="/admin-login">Login </Link></button>
            {/* <a href="/Adminlogin"> Register</a> */}
       
    
        
      </form>
    </div>
    </section>
  )
}

export default Register
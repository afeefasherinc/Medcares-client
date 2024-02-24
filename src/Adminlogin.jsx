

import React, { useState } from 'react'
import axios from 'axios'
import './Adminlogin.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Adminlogin = () => {
     const navigate=useNavigate()
    const[data,setData]=useState('')
    let handleSubmit=async(e)=>{
        e.preventDefault()
            try{
            let response= await axios.post('http://localhost:5000/api/admin/Login',data)
            console.log(response.data,'response');

            localStorage.setItem("token",response.data.token)
            localStorage.setItem("user",JSON.stringify(response.data.user))
         
            toast.success(' Succesfully Logined')


            navigate('/layout')
            }catch(error){
              toast.error(error.response.data.message || 'Login failed. Please try again.');
           console.log(error);

            }
        
    }
    let handlechange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    console.log(data);
  return (
    <section className='sections'>

    <div className='heads'>
        
      <form onSubmit={handleSubmit}>
      <h2>Login page</h2><br />
        <input type="text" className='in' onChange={handlechange} name='Username' placeholder='Username' id='Username'/><br /><br /><br /><br />
        <input type="email" className='in'onChange={handlechange} name='email' placeholder='email' id='email'/><br /><br /><br /><br />
        
        <input type="password" className='in' onChange={handlechange} name='password' placeholder='password' id='password'/>
        <div>
            <button className='log'> Login</button>
            <button className='reg'><a href="/Register" className='block'>Register </a></button>
       
        </div>
       
    
        
      </form>
    </div>
    </section>
  )
}

export default Adminlogin


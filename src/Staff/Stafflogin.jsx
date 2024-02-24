import axios from 'axios'
import React, { useState } from 'react'
import './Stafflogin.css'

const Stafflogin = () => {
 const[data,setData]=useState('')
  let handleSubmit=async(e)=>{
      e.preventDefault()
          try{
          let response= await axios.post('http://localhost:5000/api/User/userlogin',data)
          console.log(response.data,'response');
          
          }catch(error){
              console.log(error);
          }
      
  }
  let handlechange=(e)=>{
      setData({...data,[e.target.name]:e.target.value})

  }
  console.log(data);
return (
  <section className='section2'>

  <div className='heads5'>
      
    <form onSubmit={handleSubmit}>
    <h2 className='heads7'>Login</h2><br />
     <input type="text" className='inp' onChange={handlechange} name='Username' placeholder='Username' id=''/><br /><br />
      <input type="email" className='inp'onChange={handlechange} name='email' placeholder='email' id=''/><br /><br />
      
      <input type="password" className='inp' onChange={handlechange} name='password' placeholder='password' id=''/><br />
      
          <button className='buts'> <a className='register' href="/userpage" >Login</a ></button >
     
      
     
  
      
    </form>
  </div>
  </section>
)
}




export default Stafflogin

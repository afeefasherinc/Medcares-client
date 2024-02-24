import React, { useState } from 'react'



import './Userreg.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Userreg = () => {
  const navigate=useNavigate()
    const[data,setData]=useState('')
    let handleSubmit=async(e)=>{
        e.preventDefault()
            try{
            let response= await axios.post('http://localhost:5000/api/User/userregister',data)
            console.log(response.data,'response');
            toast.success('Registered Successfully')
            navigate('/login')
            }catch(error){
                console.log(error);
                toast.error(error.response.data.message ||'Registration failed. Please try again.');
            }
        
    }
    let handlechange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    console.log(data);
  return (
    <section className='section2'>

    <div className='formals'>
        
      <form onSubmit={handleSubmit}className='formreg'>
      <h2 className='heads6'>Sign Up With</h2><br />
      
     <div>

     <button className='fbu'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="45" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>Facebook</button>
     <button className='gob'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="45" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg>Google</button>
     </div>
     <label htmlFor="firstname" className='first'>First Name</label><br />
      
       <input type="text" className='inputss' onChange={handlechange} name='firstname' placeholder='First Name' id=''/><br />
       <label htmlFor="lastname" className='last'>Last Name</label><br />
       <input type="text" className='inputss' onChange={handlechange} name='lastname' placeholder='Last Name' id=''/><br />
       <label htmlFor="Username" className='last'>User Name</label><br />
        <input type="text" className='inputss' onChange={handlechange} name='Username' placeholder='Username' id=''/><br />
        <label htmlFor="email" className='email'>Email</label><br />
        <input type="email" className='inputss'onChange={handlechange} name='email' placeholder='email' id=''/><br />
        <label htmlFor="password" className='pass'>Password</label><br />
        <input type="password" className='inputss' onChange={handlechange} name='password' placeholder='password' id=''/> 
      
             <Link to={'/user-login'}> <button className='signs'>Sign Up</button></Link>
       
        <p className='not'>Already Have An Account?<a href="/user-login">Sign in now</a></p>
        <div>
            
        </div>
       
    
        
      </form>
    </div>
    </section>
  )
}

export default Userreg

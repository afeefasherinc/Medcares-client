import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import './Updateprofile.css'


const Updateprofile = () => {
    const[datas,setDatas]=useState('')
    const[error,setError]=useState(null)
    
    const navigate=useNavigate()
    const {id}=useParams()
    let handleUpdate=async(e)=>{
        e.preventDefault()
              try{
              const response= await axios.put(`http://localhost:5000/api/admin/${id}`,datas)
              console.log(response,'response');
              toast.success(' Succesfully Registered')
            }catch(error){
                if (error.response) {
                    setError(error.response.data.message);
                } else {
                    setError("An error occurred while updating the Doctor");
                    toast.error(error.response.data.message || 'Adding failed. Please try again.');
                }
            
  
            }
           
            // catch(error){
            //     toast.error(error.response.data.message ||'Registration failed. Please try again.');
            //       console.log(error.response.data.message,'eee');
            //   }
          
      }
      let handlechange=(e)=>{
          setDatas({...datas,[e.target.name]:e.target.value})
  
      }
      console.log(datas);
  
    //   let handler =()=>{
    //       navigate("/admin/doctos/updateprofile")
  
      
    return (
      
  
      <div className='heads'>
        
          
        <form onSubmit={handleUpdate}>
        <h2>Admin Profile</h2><br />
        <input type="text" className='in' onChange={handlechange} name='firstname' placeholder='First Name' id=''/><br /><br />
        <input type="text" className='in' onChange={handlechange} name='lastname' placeholder='Last Name' id=''/><br /><br />
          <input type="text" className='in' onChange={handlechange} name='username' placeholder='Username' id=''/><br /><br />
          <input type="email" className='in'onChange={handlechange} name='email' placeholder='email' id=''/><br /><br />
          
          <input type="password" className='in' onChange={handlechange} name='password' placeholder='password' id=''/><br /><br />
          <div>
         
          </div>
              
              <input type="submit"value='update'className='upro' />
              {/* <a href="/Adminlogin"> Register</a> */}
         
      
          
        </form>
      </div>
      
    )
  }
export default Updateprofile
 // const handler=()=>{
            //     navigate('admin/profile')
            // }
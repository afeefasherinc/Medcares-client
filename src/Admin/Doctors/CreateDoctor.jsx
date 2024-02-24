import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const CreateDoctor = () => {
    const[data,setData]=useState([])

    let handleSubmit=async(e)=>{
        e.preventDefault()
            try{
            let response= await axios.post('http://localhost:5000/api/doctor/doctorregister',data)
            console.log(response.data,'response');
            toast.success('Added Successfully')
            }catch(error){
              toast.error(error.response.data.message ||'Creating failed. Please try again.');
                console.log(error);
            }
        
    }
    let handlechange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    console.log(data);
  return (
    
    <div>
       
        <h1>doctors</h1>
        <div className='form'>

        <form onSubmit={handleSubmit}>
          <input type="text"onChange={handlechange} name='doctorname' placeholder='Doctor name' id='' className='gap'/><br /><br />
          <input type="email" onChange={handlechange} name='email' placeholder='email' id=''className='gap' /><br /><br />
          <input type="password"onChange={handlechange} name='password' placeholder='password' id=''className='gap' /><br /><br />
         
          <input type="Number"onChange={handlechange} name='phonenumber' placeholder='Phone Number' id=''className='gap' /><br /><br />
          <button className='sub'>Submit</button>

        </form>
      
        </div>
      
    </div>


    
  )
}

export default CreateDoctor

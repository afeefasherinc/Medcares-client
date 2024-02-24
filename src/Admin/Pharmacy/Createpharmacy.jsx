import axios from 'axios'
import React, { useState } from 'react'
import './Createpharmacy.css'
import { toast } from 'react-toastify'

const Createpharmacy = () => {
    const[data,setData]=useState([])

    let handleSubmit=async(e)=>{
        e.preventDefault()
            try{
              console.log(data,'data');
            let response= await axios.post('http://localhost:5000/api/pharmacy/pharmacyregister',data)
            console.log(response.data,'response');
            toast.success('Pharmacist Added Successfully')
            
            }catch(error){
                console.log(error);
                toast.error(error.response.data.message ||'Adding failed. Please try again.');
            }
        
    }
    let handlechange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    console.log(data);
  return (

    <div>
      <h1>Pharmacy</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handlechange} name='pharmasistname'placeholder='Pharmacist name' className='gap' /><br /><br />
        <input type="email"  onChange={handlechange}  name='email'placeholder='email'className='gap'  /><br /><br />
        <input type="password"  onChange={handlechange} name='password'placeholder='Password'className='gap'  /><br /><br />
        <input type="number"  onChange={handlechange} name='phonenumber'placeholder='Phone Number'className='gap'  /><br /><br />
        
        <button className='sub'>Submit</button>
        
        
      </form>
    </div>
  )
}
    

export default Createpharmacy

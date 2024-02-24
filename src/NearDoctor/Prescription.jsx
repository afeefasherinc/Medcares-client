import React, { useState } from 'react'
import './Prescription.css'
import axios from 'axios';
import { toast } from 'react-toastify';


const Prescription = () => {
  const[data,setData]=useState([])

  let handleSubmit=async(e)=>{
      e.preventDefault()
          try{
            console.log(data,'data');
          let response= await axios.post('http://localhost:5000/api/prescription/createprescription',data)
          console.log(response.data,'response');
          toast.success('Successfully Submitted')
          // toast.success('Pharmacist Added Successfully')
          
          }catch(error){
              console.log(error);
              toast.error(error.response.data.message ||'Adding Prescription failed. Please try again.');
              
              // toast.error('Adding Failed,Please Try Again')
          }
      
  }
  let handlechange=(e)=>{
      setData({...data,[e.target.name]:e.target.value})

  }
  console.log(data);
return (

  <div>
    <h1>Prescription</h1>
    <form onSubmit={handleSubmit}>
      
      <input type="text" onChange={handlechange} name='patientname'placeholder='Patient name' className='gap' /><br /><br />
      <input type="text"  onChange={handlechange}  name='medication'placeholder='Medication'className='gap'  /><br /><br />
      <input type="number"  onChange={handlechange} name='dosage'placeholder='Dosage'className='gap'  /><br /><br />
      <input type="text"  onChange={handlechange} name='instructions'placeholder='Instructions'className='gap'  /><br /><br />
      
      <button className='bu'>Submit Prescription</button>
      
      
    </form>
  </div>
)
}
    

export default Prescription

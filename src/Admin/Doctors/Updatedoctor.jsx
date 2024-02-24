import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Updatedoctor = () => {
    const[data,setData]=useState([])
    const[error,setError]=useState(null)
    const[doctorData,setDoctortData]=useState([])
    const navigate=useNavigate()
    const {id}=useParams()
    

    let handleUpdate=async(e)=>{
        e.preventDefault()
            try{
            let response= await axios.put(`http://localhost:5000/api/doctor/${id}`,data)
            console.log(response.data,'response');
            toast.success('Updated Successfully')
            }catch(error){
                if (error.response) {
                    setError(error.response.data.message);
                } else {
                    setError("An error occurred while updating the Doctor");
                }
                toast.error(error.response.data.message || 'Adding failed. Please try again.');
            }
            const handler=()=>{
                navigate('admin/doctors/Viewdoctor')
            }
        }
              
            
        
    
    let handlechange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    console.log(data);
    

    // useEffect(() => {
    //     const fetchdoctorData = async () => {
    //       try {
    //         const response = await axios.get('http://localhost:5000/api/doctor/');
    //         setDoctortData(response.data.data);
    //         console.log('doctors',response);
    //       } catch (error) {
    //        console.log(error);
    //       }
    //     };
    
    //     fetchdoctorData();
      
    //     console.log('hgfhy',doctorData);
    //   }, []);
  
      

  return (
    
    <div>
       
        <h1>doctors</h1>
        <div className='form'>

        <form onSubmit={handleUpdate}>
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




export default Updatedoctor

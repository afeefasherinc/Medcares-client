import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Userpage.css'
import doc from "./images/user.jpg"
import { toast } from 'react-toastify'


const Userpage = () => {
    const[data,setData]=useState({
     name:'',
     age:'',
     gender:'',
     doctorname:'',
     phonenumber:''
    })
     const[doctorData,setdoctortData]=useState([])
    //  const [userDoctor,setUserDoctor]=useState(null)
    let handleSubmit=async(e)=>{
        const{name,age,gender,doctorname,phonenumber}=data

        e.preventDefault()
            try{
            let response= await axios.post(`http://localhost:5000/api/appointment/newappointment`,data)
            console.log(response.data,'response');
            toast.success('Added Successfully')
            e.target.reset()
            
            setData({
                name: '',
                age: '',
                gender: '',
                doctorname: '',
                phonenumber: ''
            });

            }catch(error){
                console.log(error);
                toast.error(error.response.data.message ||'Submission failed. Please try again.');
            }
        
    }
    let handlechange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }

    console.log(data);

    useEffect(() => {
        const fetchdoctorData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/doctor/');
            setdoctortData(response.data.data);
            console.log('doctor',response);
          } catch (error) {
           console.log(error);
          }
        };
    
        fetchdoctorData();
        
        
      }, []);
      
  return (
    <section>
        <nav className='navb'>
            <h1 className='hedss'>BOOK AN APPOINTMENT</h1>

        </nav>

    <div className='flex3'>
         <img src={doc} alt="" className='doc'/> 
         <h1 className='appoints'>Take Appointments Seamlessly</h1> 
        </div>
       
            <div className='border'> 
 
            <h1 className='text'>Appointment Form</h1> 
        <form onSubmit={handleSubmit} className='margin '>
             <input type="text" name='name' onChange={handlechange} placeholder='Name' className='box' />
            <input type="Number" name='age' onChange={handlechange} placeholder='Age' className='box' /><br /><br />
            <select name='gender' onChange={handlechange} className='gap'>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
            <select name='doctorname' className='gap' onChange={handlechange} >
                    <option value="">Select Doctor</option>
                    {doctorData.map((doctor) => (
                        <option key={doctor._id} value={doctor.doctorname}>{doctor.doctorname}</option>
                    ))}
        </select><br /><br />
            <input type="number" name='phonenumber'onChange={handlechange} placeholder='Phone Number' className='phone'  /><br /><br />
          
            <button className='submit'>Submit</button>
        </form>
        
       
            </div>
           
       
        
       
    
        
      
    
    </section>
  )
}

export default Userpage

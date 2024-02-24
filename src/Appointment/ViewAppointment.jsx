import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Viewappointment.css'
import { toast } from 'react-toastify';

const ViewAppointment = () => {
  const [UserData, setUserData] = useState({
    name:'',
    age:'',
    gender:'',
    doctorId:'',
    phonenumber:''

  })
  const[error,setError]=useState(null)
    const[refresh,setRefresh]=useState(true)
  const handledelete=async(id)=>{
    try{
      const response =await axios.delete(`http://localhost:5000/api/appointment/delete/${id}`);
      console.log('deleted appoinment',response);
      toast.success('delete successfully')
      setRefresh(!refresh)
    }catch(err){
      toast.error('error occured')
  if(err.response){
    setError(err.response.data.message);
  }else{
    setError("error occured")
  }
    }
  }


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/appointment/');
        setUserData(response.data.data);
        console.log('appointment res',response);
      } catch (error) {
       console.log(error);
      }
    };

    fetchUserData();
  }, [refresh]);
  return (
    <div className='view p-10'>
    <h2 className='text-center font-bold ' >Appointment Details</h2>
    {UserData.length > 0 ? (

      UserData.map((item,index) => {
        return (
          <div className='details'>
            <h5>Patient Name</h5>
            
            <p>{item.name}</p>
            <h5>Age</h5>
            <p>{item.age}</p>
            <h5>Gender</h5>
            <p>{item.gender}</p>
            <h5>Phone Number</h5>
            <p>{item.phonenumber}</p>
            <h5>Doctor Name</h5>
            <p>{item.doctorname}</p>
            
            <button onClick={()=>{handledelete(item._id)}}className='on'>delete</button>
            
            {/* <p>{item.companyName}</p> */}

          </div>
        )
      })



    ) : (
      <p>Loading pharmacy data...</p>
    )}
  </div>
  )}
   
  

export default ViewAppointment

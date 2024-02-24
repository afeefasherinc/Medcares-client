import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  './Viewdoctor.css'
import { toast } from 'react-toastify';


const Viewdoctor= () => {
    const [doctorData, setDoctortData] = useState([]);
    const[error,setError]=useState(null)
    const[refresh,setRefresh]=useState(true)
    const navigate=useNavigate()


    const handlesdelete=async(id)=>{
      try{
        const response =await axios.delete(`http://localhost:5000/api/doctor/delete/${id}`);
        console.log('deleted doctor',response);
        toast.success('delete successfully')
        setRefresh(!refresh)
      }catch(err){
        toast .error('error occured')
    if(err.response){
      setError(err.response.data.message);
    }else{
      setError("error occured")
    }
      }
    }
     let handleup=(id)=>{
      navigate(`/admin/doctors/updatedoctor/${id}`)
     }
    useEffect(() => {
      const fetchdoctorData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/doctor/');
          setDoctortData(response.data.data);
          console.log('doctors',response);
        } catch (error) {
         console.log(error);
        }
      };
  
      fetchdoctorData();
    
      console.log('hgfhy',doctorData);
    }, [refresh]);
    return (
      <div className='view p-10'>
        <h2 className='text-center font-bold text-white  ' >Doctor Details</h2>
        {doctorData.length > 0 ? (
  
          doctorData.map((item) => {
            return (
              <div className='font' >
                <h5>Doctor Name</h5>
                <p>{item.doctorname}</p>
                <h5>Email</h5>
                <p>{item.email}</p>
               <h5>Phone Number</h5>
                <p>{item.phonenumber}</p>
                <div className='flex5'>
                  
                <button onClick={()=>{handlesdelete(item._id)}}className='delte'>delete</button>
                <button onClick={()=>{handleup(item._id)}}className='edit'>edit</button>
                </div>
                {/* <p>{item.companyName}</p> */}
  
              </div>
            )
          })
  
  
  
        ) : (
          <p>Loading doctor data...</p>
        )}
      </div>
    );
  };
  


export default Viewdoctor

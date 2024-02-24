import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import "./Viewstaff.css"

const Viewstaff = () => {
    const [StaffData, setStaffData] = useState([]);
    const[error,setError]=useState(null)
    const[refresh,setRefresh]=useState(true)
    const navigate=useNavigate()



    const handledelete=async(id)=>{
      try{
        const response =await axios.delete(`http://localhost:5000/api/staff/delete/${id}`);
        console.log('deleted staff',response);
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
    let handleup=(id)=>{
     navigate(`/admin/staffs/updatestaff/${id}`)
    }

    useEffect(() => {
      const fetchStaffData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/staff/');
          setStaffData(response.data.data);
          console.log('staffresponse',response.data.data);
        } catch (error) {
         console.log(error);
        }
      };
  
      fetchStaffData();
    }, [refresh]);
    return (
      <div className='view p-10'>
        <h2 className='text-center font-bold text text-white  ' >Staff Details</h2>
        {/* <div className='align'> */}

        {StaffData.length > 0 ? (
          
          StaffData.map((item) => {
            return (
              

              <div className='name' >
                <h5>Staff Name</h5>
                <p>{item.staffname}</p>
                <h5>Email</h5>
                <p>{item.email}</p>
                <h5>Phone Number</h5>
                <p>{item.phonenumber}</p>
                {/* <p>{item.departmentName}</p> */}
                
                <button onClick={()=>{handledelete(item._id)}}className='on'>delete</button>
                <button onClick={()=>{handleup(item._id)}}className='edit'>edit</button>
                {/* <p>{item.companyName}</p> */}
  
              </div>
             
            )
          })
          
          
          
          ) : (
            <p>Loading section data...</p>
            )}
            </div>
      // </div>
    );
  };   

export default Viewstaff

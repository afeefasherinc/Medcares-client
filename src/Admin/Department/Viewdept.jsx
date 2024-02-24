import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import './Viewdept.css'

const Viewdept = () => {
    const [deptData, setDeptData] = useState([]);
    const [doctData, setDoctData] = useState([]);
    const[error,setError]=useState(null)
    const[refresh,setRefresh]=useState(true)
    const navigate=useNavigate()

    const handlesdelete=async(id)=>{
      try{
        const response =await axios.delete(`http://localhost:5000/api/department/delete/${id}`);
        console.log('deleted department',response);
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
    navigate(`/admin/departments/updatedepartment/${id}`)
  }
    const handledelete=async(id)=>{
      try{
        const response = await axios.delete('http://localhost:5000/api/department/delete/:id');//changeapi


        
      }
      catch(error){
        console.log(error);

      }
    }

    useEffect(() => {

      const fetchdeptData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/department/');
          setDeptData(response.data.data);
          setDoctData(response.data.datas)
          console.log('deptresponse',response);
          console.log('doct response',response.data.datas);
        } catch (error) {
         console.log(error.message);
        }
      };
  
      fetchdeptData();


    }, [refresh]);
    return (
      <div className='view p-10'>
        <h2 className='text-center font-bold text-white  ' >Department Details</h2>
        {doctData.length > 0 ? (
  
          doctData.map((item) => {
            return (
              <div className='deptname'>
                <h5>Department Name</h5>
                <p>{item.departmentName}</p>
                <h5>Docotr Name</h5>
                {item.doctorDetails && item.doctorDetails.length > 0 && (
                  <p>{item.doctorDetails[0].doctorname}</p>
                )}                
               <button onClick={()=>{handlesdelete(item._id)}}className='on'>delete</button>
               <button onClick={()=>{handleup(item._id)}}className='on'>edit</button>
                {/* <p>{item.companyName}</p> */}
  
              </div>
            )
          })
  
  
  
        ) : (
          <p>Loading dept data...</p>
        )}
      </div>
    );
  };
  

export default Viewdept

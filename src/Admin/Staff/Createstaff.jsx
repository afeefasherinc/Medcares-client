import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Createstaff=()=> {
    const[data,setData]=useState({
      staffname:'',
      email:'',
      password:'',
      departmentId:'',
      phonenumber:''
    }
    )
    const[departmentData,setdepartmentData]=useState([])
    const[departmentStaff,setDepartmentStaff]=useState(null)
    let handleSubmit=async(e)=>{
      const{staffname,email,password,departmentId,phonenumber}=data

        e.preventDefault()
            try{
                console.log(data,'data');
            let response= await axios.post(`http://localhost:5000/api/staff/Createstaff`,data)
            console.log(response.data,'response');
            toast.success('Staff Added Successfully')
            setDepartmentStaff({
              staffname:data.staffname,
              email:data.email,
              password:data.password,
              phonenumber:data.phonenumber,
              departmentName:departmentData.find(department=>department._id==data.departmentId).departmentName
            });
            
            }catch(error){
                console.log(error);
                toast.error(error.response.data.message ||'Adding failed. Please try again.');
            }
        
    }
    let handlechange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})

    }
    
    useEffect(() => {
      const fetchdepartmentData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/department/');
          setdepartmentData(response.data.data);
          console.log('department',response);
        } catch (error) {
         console.log(error);
        }
      };
  
      fetchdepartmentData();

      
    }, []);
    

  return (
    <div>
        <h1>Staff</h1>
        <div className='form'>

        <form onSubmit={handleSubmit}>
          <input type="text"onChange={handlechange} name='staffname' placeholder='Staff name' className='gap'/><br /><br />
          <input type="email" onChange={handlechange} name='email' placeholder='email' className='gap' /><br /><br />
          <input type="password"onChange={handlechange} name='password' placeholder='password' className='gap' /><br /><br />
          <select name='departmentId' className='gap' value={data.departmentName} onChange={handlechange}>
                    <option value="">Select Department</option>
                    {departmentData.map((department) => (
                        <option key={department._id} value={department._id}>{department.departmentName}</option>
                    ))}
        </select>
          <input type="Number"onChange={handlechange} name='phonenumber' placeholder='Phone Number' className='gap' /><br /><br />
          <button className='sub'>Submit</button>

        </form>
        {departmentStaff &&(
          <div>
            <h2>StaffDetails</h2>
            <p>Staff Name: {departmentStaff.staffname}</p>
            <p>Email: {departmentStaff.email}</p>
            <p>Department: {departmentStaff.departmentName}</p>
            <p>Phone Number: {departmentStaff.phonenumber}</p>
            
            

          </div>
        )}
      
        </div>
      
      
    </div>
  )
}
export default Createstaff
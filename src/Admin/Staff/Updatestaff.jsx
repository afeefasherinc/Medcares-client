import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Updatestaff = () => {
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
      const[error,setError]=useState(null);
      const navigate=useNavigate()
      const{id}=useParams()
      let handleUpdate=async(e)=>{
        e.preventDefault();
        const{staffname,email,password,departmentId,phonenumber}=data
  
          try{
                  console.log(data,'data');
                  const selectedDepartment=departmentData.find(department=>department._id==departmentId)
              let response= await axios.put(`http://localhost:5000/api/staff/${id}`,{
                staffname,
                 email,
                password,
                departmentId,
                 phonenumber,
               departmentName:selectedDepartment?selectedDepartment.departmentName:''
              });

              console.log(response.data,'response');
              toast.success('Staff Added Successfully')
              setDepartmentStaff({
                  staffname:data.staffname,
                  email:data.email,
                  password:data.password,
                  phonenumber:data.phonenumber,
                  departmentName:selectedDepartment?selectedDepartment.departmentName:''
                });
            }catch(error){
              
                if (error.response) {
                    setError(error.response.data.message);
                } else {
                    setError("An error occurred while updating the Department");
                }
                toast.error(error.response.data.message || 'Adding failed. Please try again.');
            }
        }
      
      const handler=()=>{
        navigate('admin/staffs/Viewstaff')
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
  
          <form onSubmit={handleUpdate}>
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

export default Updatestaff

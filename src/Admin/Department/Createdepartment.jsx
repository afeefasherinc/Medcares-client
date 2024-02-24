import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Createdepartment.css'
import { Dropdown } from 'bootstrap'
import { toast } from 'react-toastify';

const Createdepartment = () => {
    const[data,setData]=useState({
      departmentName:'',
      doctorId:''
    })
    const [doctorData, setDoctortData] = useState([]);
    const[doctorDepartments,setDoctorDepartments]=useState(null)


    let handleSubmit=async(e)=>{
      const {doctorId,departmentName} = data
      e.preventDefault()
      try{
              console.log('gtrt',departmentName);
            let response= await axios.post(`http://localhost:5000/api/department/createdepartment`,data)
            console.log(response.data,'response');
           toast.success('Department Added Successfully')
            setDoctorDepartments({
              departmentName: data.departmentName,
              doctorName: doctorData.find(doctor => doctor._id === data.doctorId).doctorname
            });
            
            }catch(error){

                console.log(error);
                toast.error(error.response.data.message ||'Adding failed. Please try again.');
            }
        
    }

    let handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    console.log('handlechange',data);

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
    }, []);
    



  return (

    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='departmentName'placeholder='department name'  onChange={handleChange} className='gap' /><br /><br />
        <select name='doctorId' className='gap' value={data.doctorName} onChange={handleChange}>
                    <option value="">Select Doctor</option>
                    {doctorData.map((doctor) => (
                        <option key={doctor._id} value={doctor._id}>{doctor.doctorname}</option>
                    ))}
        </select><br /><br />
        <input type='submit' value='Add department' className='add'/>
        {/* <div className='black'> */}
        {/* <button>Update</button> */}
        {/* </div> */}
      </form>
      {doctorDepartments && (
        <div>
          <h2>Doctor and Departments</h2>
          <p>Department Name: {doctorDepartments.departmentName}</p>
          <p>Doctor Name: {doctorDepartments.doctorName}</p>
        </div>
      )}
    </div>
  );
};
     
  

export default Createdepartment

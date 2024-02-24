import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [AdminData, setAdminData] = useState([]);
  
  const navigate=useNavigate()
  let handlesup=(id)=>{
    navigate(`/admin/updateprofile/${id}`)
  }
    useEffect(() => {
      const fetchAdminData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/Admin/');
          setAdminData(response.data.data);
        } catch (error) {
         console.log(error);
        }
      };
  
      fetchAdminData();
    }, []);
    return (
      <div>

      
        <h2 className='text-center font-bold ' >Admin Details</h2>
      <div className='align'>
      

        { AdminData && AdminData.length > 0 ? (
          
          AdminData.map((item) => {
            return (
              
              <div className="mapdetails flex gap-4 box-border  ">
                <h6 className='black'>First Name<p>{item.firstname}</p></h6>
                <h6 className='black'>Last Name<p>{item.lastname}</p></h6>
                <h6 className='black'>User Name<p>{item.username}</p></h6>
                <h6 className='black'>Email<p>{item.email}</p></h6>
                
                
                
                <button onClick={()=>{handlesup(item._id)}}className='edit'>edit</button>
                {/* <p>{item.companyName}</p> */}
  
              </div>
            )
          })
          
          
          
          ) : (
            <p>Loading Admin data...</p>
            )}
      </div>
            </div>
    );
  };
  



export default Profile


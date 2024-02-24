import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './List.css'
import { Link } from 'react-router-dom';

const List = () => {
  
    const [UserData, setUserData] = useState({
        name:'',
        age:'',
        gender:'',
        doctorId:'',
        phonenumber:''
    
      })
     
        
     
    
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
      }, []);
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
                
                {/* <button className='li'><Link to={'/prescription'}className='page'>Prescription</Link></button> */}
                
                {/* <p>{item.companyName}</p> */}
    
              </div>
            )
          })
    
    
    
        ) : (
          <p>Loading pharmacy data...</p>
        )}
      </div>
      )}
       

export default List

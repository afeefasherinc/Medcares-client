import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Viepharmacy.css'
import { toast } from 'react-toastify';


const Viewpharmacy = () => {
    const [PharmacyData, setPharmacyData] = useState([]);
    const[error,setError]=useState(null)
    const[refresh,setRefresh]=useState(true)
    const navigate=useNavigate()
    const handledelete=async(id)=>{
      try{
        const response =await axios.delete(`http://localhost:5000/api/pharmacy/delete/${id}`);
        console.log('deleted staff',response);
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
    let handlesup=(id)=>{
      navigate(`/admin/pharmacy/updatepharmacy/${id}`)
    }
    useEffect(() => {
      const fetchPharmacyData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/pharmacy/');
          setPharmacyData(response.data.data);
        } catch (error) {
         console.log(error.message);
        }
      };
  
      fetchPharmacyData();
    }, [refresh]);
    return (
      <div className='view p-10'>
        <h2 className='text-center font-bold ' >Pharmacy Details</h2>
        {PharmacyData.length > 0 ? (
  
          PharmacyData.map((item) => {
            return (
              <div className='pharmacyname'>
                <h5>Pharmacist Name</h5>
                <p>{item.pharmasistname}</p>
                <h5>Email</h5>
                <p>{item.email}</p>
                <h5>Phone Number</h5>
                <p>{item.phonenumber}</p>
                
                <button onClick={()=>{handledelete(item._id)}}className='on'>delete</button>
                <button onClick={()=>{handlesup(item._id)}}className='edit'>edit</button>
               
                {/* <p>{item.companyName}</p> */}
  
              </div>
            )
          })
  
  
  
        ) : (
          <p>Loading pharmacy data...</p>
        )}
      </div>
    );
  };
  


export default Viewpharmacy

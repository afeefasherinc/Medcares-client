import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Updatepharmacy = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            console.log(data, 'data');
            let response = await axios.put(`http://localhost:5000/api/pharmacy/${id}`, data);
            console.log(response.data, 'response');
            toast.success('Updated Successfully');
            // navigate('admin/pharmacy/Viewpharmacy');
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while updating the Pharmacy");
            }
            toast.error(error.response.data.message || 'Adding failed. Please try again.');
        }
    };

    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    console.log(data);

    return (
        <div>
            <h1>Pharmacy</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" onChange={handlechange} name='pharmasistname' placeholder='Pharmacist name' className='gap' /><br /><br />
                <input type="email" onChange={handlechange} name='email' placeholder='email' className='gap' /><br /><br />
                <input type="password" onChange={handlechange} name='password' placeholder='Password' className='gap' /><br /><br />
                <input type="number" onChange={handlechange} name='phonenumber' placeholder='Phone Number' className='gap' /><br /><br />
                <input type="submit" value='submit' className='sub' />
            </form>
        </div>
    );
};

export default Updatepharmacy;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Updatedepartment = () => {
    const [data, setData] = useState({
        departmentName: '',
        doctorId: ''
    });
    const [doctorData, setDoctorData] = useState([]);
    const [doctorDepartments, setDoctorDepartments] = useState(null);
    const [error, setError] = useState(null);
    const navigate=useNavigate()
    const{id}=useParams()
    const handleUpdate = async (e) => {
        e.preventDefault();
        const { doctorId, departmentName } = data;
        try {
            console.log('departmentName', departmentName);
            // Find the selected doctor object from doctorData
            const selectedDoctor = doctorData.find(doctor => doctor._id === doctorId);
            // Send the correct data in the PUT request
            let response = await axios.put(`http://localhost:5000/api/department/${id}`, {
                departmentName,
                doctorId,
                // Assuming you want to update the department with the selected doctor's name
                doctorName: selectedDoctor ? selectedDoctor.doctorname : ''
            });
            console.log(response.data, 'response');
            toast.success('Department Updated Successfully');
            setDoctorDepartments({
                departmentName: data.departmentName,
                // Use the selected doctor's name from selectedDoctor
                doctorName: selectedDoctor ? selectedDoctor.doctorname : ''
            });
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while updating the Department");
            }
            toast.error(error.response.data.message || 'Adding failed. Please try again.');
        }
    }
    const handler = () => {
        navigate('admin/departments/Viewdept');
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        const fetchDoctorData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/doctor/');
                setDoctorData(response.data.data);
                console.log('doctors', response);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDoctorData();
    }, []);

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" name='departmentName' placeholder='department name' onChange={handleChange} className='gap' /><br /><br />
                <select name='doctorId' className='gap' value={data.doctorName} onChange={handleChange}>
                    <option value="">Select Doctor</option>
                    {doctorData.map((doctor) => (
                        <option key={doctor._id} value={doctor._id}>{doctor.doctorname}</option>
                    ))}
                </select><br /><br />
                <input type='submit' value='Add department' className='add' />
                
            </form>
        </div>
    );
}

export default Updatedepartment;

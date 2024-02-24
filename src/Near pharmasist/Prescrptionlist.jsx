import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';
import './Prescriptionlist.css';
import { ReactToPrint } from 'react-to-print';

const Prescrptionlist = () => {
    const [prescriptionData, setprescriptionData] = useState([]);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(true);
    const prescriptionRefs = useRef([]);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/prescription/delete/${id}`);
            console.log('deleted prescription', response);
            toast.success('delete successfully');
            setRefresh(!refresh);
        } catch (err) {
            toast.error('error occurred');
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError("error occurred");
            }
        }
    };

    useEffect(() => {
        const fetchprescriptionData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/prescription/');
                setprescriptionData(response.data.data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchprescriptionData();
    }, [refresh]);

    return (
        <div className='view p-10'>
            <h2 className='text-center font-bold'>Prescription Details</h2>
            {prescriptionData.length > 0 ? (
                prescriptionData.map((item, index) => (
                    <div key={item._id} className='name' ref={(ref) => prescriptionRefs.current[index] = ref}>
                        <h5>Patient Name</h5>
                        <p>{item.patientname}</p>
                        <h5>Medication</h5>
                        <p>{item.medication}</p>
                        <h5>Dosage</h5>
                        <p>{item.dosage}</p>
                        <h5>Instruction</h5>
                        <p>{item.instructions}</p>

                        <button onClick={() => handleDelete(item._id)} className='delete hide-on-print'>Delete</button>
                        <ReactToPrint
                            trigger={() => <button className='print hide-on-print'>Print</button>}
                            content={() => prescriptionRefs.current[index]}
                        />
                    </div>
                ))
            ) : (
                <p>Loading prescription data...</p>
            )}
        </div>
    );
};

export default Prescrptionlist;

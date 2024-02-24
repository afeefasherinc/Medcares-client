import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import HomeAdmin from './Admin/a/HomeAdminn';
import About from './About';
import Service from './Service';
import Admin from './Admin';



// admin
import { AdminLayout, AdminDepartments, AdminDoctors, AdminPharmacy, AdminProfile, AdminStaff, AdminHome, } from "./Admin/"
import Contact from './Contact';
import Adminlogin from './Adminlogin';
import Userpage from './Userpage';
import Register from './Register';
import Layout from './Admin/AdminLayout/Layout';
import CreateDoctor from './Admin/Doctors/CreateDoctor';
import Viewdoctor from './Admin/Doctors/Viewdoctor';
import Createdepartment from './Admin/Department/Createdepartment';
// import Viewpharmacy from './Admin/Pharmacy/Viewpharmacy';
import Createpharmacy from './Admin/Pharmacy/Createpharmacy';
import Viewpharmacy from './Admin/Pharmacy/Viewpharmacy';
import Createstaff from './Admin/Staff/Createstaff';
import Viewstaff from './Admin/Staff/Viewstaff';
import Viewdept from './Admin/Department/Viewdept';
// import Appointment from './Appointment/ViewAppointment'
import Userreg from './Userreg';
import ViewAppointment from './Appointment/ViewAppointment';
import Stafflayout from './Staff/Stafflayout/Stafflayout';
import Stafflogin from './Staff/Stafflogin';
import Doctorlayout from './NearDoctor/Doctorlayout';
import Doctorlogin from './NearDoctor/Doctorlogin';
import Prescription from './NearDoctor/Prescription';
import { ToastContainer } from 'react-toastify';
import Pharmacylayout from './Near pharmasist/Pharmacylayout';
import Prescrptionlist from './Near pharmasist/Prescrptionlist';
import Updatedepartment from './Admin/Department/Updatedepartment';
import Updatedoctor from './Admin/Doctors/Updatedoctor';
import Updatestaff from './Admin/Staff/Updatestaff';
import Updatepharmacy from './Admin/Pharmacy/Updatepharmacy';
import Updateprofile from './Admin/Profile/Updateprofile';
import List from './NearDoctor/List';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/user-login' element={<Login />} />
        <Route path='/user-register' element={<Userreg />} />

        <Route path='/userpage' element={<Userpage />} />
        <Route path='/user-register' element={<Userreg />} />

        <Route path='/HomeAdmin' element={<HomeAdmin />} />
        <Route path='/About' element={<About />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/admin-register' element={<Register />} />
        <Route path='/admin-login' element={<Adminlogin />} />


        <Route path='/layout' element={<Layout />} />

        <Route path="/admin" element={<AdminLayout />}>
            <Route path='home' element={<AdminHome />} />
            <Route path='updateprofile/:id' element={<Updateprofile />} />

            <Route path='doctors' element={<AdminDoctors />} >
              <Route path='' element={<Viewdoctor />} />
              <Route path='createdoctor' element={<CreateDoctor />} />
              <Route path='updatedoctor/:id' element={<Updatedoctor />} />
            </Route>
            <Route path='departments' element={<AdminDepartments />} >
              <Route path='' element={<Viewdept />} />
              <Route path='createdepartment' element={<Createdepartment />} />
              <Route path='updatedepartment/:id' element={<Updatedepartment/>} />
              
              
            </Route>
            <Route path='pharmacy' element={<AdminPharmacy />}    >
              <Route path='' element={<Viewpharmacy />} />
              <Route path='createpharmacy' element={<Createpharmacy />} />
              <Route path='updatepharmacy/:id' element={<Updatepharmacy/>} />

            </Route>


              <Route path='staffs' element={<AdminStaff />} >
                <Route path='' element={<Viewstaff />} />
                <Route path='createstaffs' element={<Createstaff />} />
                <Route path='updatestaff/:id' element={<Updatestaff />} />

              </Route>
              <Route path='profile' element={<AdminProfile />} />
              <Route path="/admin/ViewAppointment" element={<ViewAppointment />} />
              <Route path='/admin/doctos' element={<AdminLayout />}>
                <Route path='home' element={<AdminHome />} />
                <Route path='profile' element={<AdminProfile />} />
                <Route path='departments' element={<AdminDepartments />} /> 
                {/* <Route path='updateprofile/:id' element={<Updateprofile />} /> */}
              </Route>
    
              <Route path='/admin' element={<AdminLayout />}>
                <Route path='createdoctor' element={<CreateDoctor />} />
                <Route path='viewappointment' element={<ViewAppointment />} />
                
                          </Route>
                       
            </Route>






          {/* <Route path='/staff' element={<Stafflayout/>}/>
          

    // */}
          {/* //        <Route path='ViewAppointment'element={< ViewAppointment/>} />  */}





        {/* staff module */}

        <Route path='/staff' element={<Stafflayout/>}>
           <Route path='stafflogin' element={<Stafflogin/>}/>
    </Route> 

    {/* vere module thudangaan */}
    {/* doctor module */}
    <Route path='/doc' element={<Doctorlayout/>}>
      <Route path='doctorlogin' element={<Doctorlogin/>}/>
      <Route path='prescription' element={<Prescription/>}/>
      <Route path='list' element={<List/>}/>
  
      


</Route>

<Route path='/nearpharmacy' element={<Pharmacylayout/>}>
  <Route path='prescriptionlist' element={<Prescrptionlist/>} />
</Route>

      </Routes>


    </BrowserRouter>


  </React.StrictMode>
);


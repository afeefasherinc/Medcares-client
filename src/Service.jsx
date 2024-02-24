import React from 'react'
import './Service.css';
import image1 from "./images/ambu.jpg"
import image2 from "./images/blood.png"
import image3 from "./images/heart.png"
import image4 from "./images/op.png"
import image5 from "./images/pycho.jpg"
import image6 from "./images/thermo.png"
import image7 from "./images/wheel.avif"
import image8 from "./images/xray.jpg"





const Service = () => {
    return (
        <div>
            <h1 className='head5'>Our Services</h1>

        
      <div className='flex'>
       
      
        
      
      
      
      <div className="grid " >
        
  
  
        
        <div class='a'>
            <h2>Ambulance 24*7</h2>
          
        <img src={image1} className='imgWidth'  alt=" " width={100} />
        <p className='parag'>A vehicle equipped with medications and devices intended to stabilize patients while speeding them to a hospital.

</p>
  </div>
   <div class='a'>
    <h2>Casuality</h2>
          
        <img src={image2} className='imgWidth' alt=" "  /><br />
        <p className='parag'>It is a medical treatment facility specializing in emergency medicine, the acute care of patients who present without prior appointment.</p>
  </div>
  <div class='a'>
    <h2>Blood Bank</h2>
    <img src={image3} className='imgWidth'  alt=" "  />
    <p className='parag'>A blood bank is a center where blood gathered as a result of blood donation, stored and preserved for later use in blood transfusion.</p>
  </div>
  <div class='a'>
    <h2>Op</h2>
        
        <img src={image4} className='imgWidth'  alt=" "  />
        <p className='parag'>An outpatient is the part of a hospital for the treatment of patients, who visit the hospital for treatment, but do not at this time require to be admitted.</p>
  </div>
  <div class='a'>
          <h2>Physiotherapy</h2>
        <img src={image5} className='imgWidth'  alt=" "  />
        <p className='parag'>Physiotherapists work with the multidisciplinary team of healthcare providers in SGH to provide holistic care that is aligned with our patients' goals.

</p>
  </div>
  <div class='a'>
      <h2>Laboratory</h2>
       <img src={image6} className='imgWidth'  alt=" "  />
       <p className='parag'>Laboratory is a place where tests are usually done on clinical specimens in order to obtain information about the health of a patient.

</p>
  </div>
  <div class='a'>
      <h2>Casuality</h2>
          
        <img src={image7} className='imgWidth'  alt=" "  />
        <p className='parag'>It is a medical treatment facility specializing in emergency medicine, the acute care of patients who present without prior appointment.</p>
      
  </div>
  <div class='a'>
      <h2>Xray</h2>
          
        <img src={image8} className='imgWidth'  alt=" "  />
        <p className='parag'>X-rays are a type of electromagnetic radiation. It is shorthand for X-radiation, so named simply because it was an unknown form of radiation.

</p>
      
  </div>
  
  
  
 </div> 
   </div> 
  
    
        </div>
  )
}

export default Service 

  
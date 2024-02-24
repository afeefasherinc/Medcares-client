import React from 'react'
import './About.css';
import image from "./images/about.jpg"

const About = () => {
  return (
    <div className='containers'>
        <h2 className='title'>About Us</h2>
        <div className='flex8'>
          
            <div className='image'>
                <img src={image} alt="" />
            </div>
            <div className='content'>
                <p>The vision 'affordable, accessible and quality healthcare for all', a dream of visionary, Dr. K G Alexander was made a reality in 1987 with the commencement of iCarePro. The novel <br /> initiative then marked a revolution in the healthcare segment in Kerala, thus symbolizing an answer for the growing healthcare demands of the state. A tribute to late K C Varghese ,  <br />father of  Dr. K G Alexander, the Chairman and Managing Director, the hospital has set a benchmark in offering unprecedented care.</p>
                {/* <a href="" className='readmore'>readmore</a> */}
            </div>
        </div>
      
    </div>
  )
}

export default About

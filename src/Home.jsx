import React from 'react'
import './Home.css';


const Home = () => {
  return (
    <div>
      
      <nav>
    <div className='logo'>MedCare</div>
    <ul>
        <li><a href="Home">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Service">Services</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/admin-register">Admin</a></li>
        
        

    </ul>
    </nav> 
     <div className='heading'>
    <section className='ground'>
  
    </section>
       
      <h1 className='head1'>We are here for your Care</h1>
      <div>
      <h4 className='head2'>WELCOME TO MedCare</h4>
      </div>
      <div>
      <button className='butto'><a className='href' href="/user-register">Register Here</a></button>
      </div>
    </div>
    <div>
      
    </div>
   
    </div>
   
  )
}
    

export default Home

import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='full'>
        <section className='contacts'>
            <div className='containerss'>
                <h2 className='head7'>Contact Us</h2>
                <div className='contact-wrapper'>
                    <div className='contact-form'>
                        <h3 className='head8'>Send Us A Message</h3>
                        <form action="">
                            <div className='form-group'>
                            <input type="text" name='name' placeholder='Your name'/>
                            </div>
                            <div className='form-group'>
                            <input type="email" name='email' placeholder='Your email'/>
                            </div>
                            <div className='form-group'>
                            <textarea name="meassge" placeholder='Your message' ></textarea>
                            </div>
                            <a href="" className='message'>Send message</a>
                        </form>

                    </div>
                <div className='contact-info'>
                    <h3 className='head9'>Contact Information</h3>
                    <p > 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
  <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
</svg>
                        45647779334
                        </p>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
                            MedCare123@gmail.com

                        </p>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
                            Marigold road <br />
                            England <br />
                            744358
                        </p>

                </div>
                </div>

            </div>

        </section>
    </div>
  )
}

export default Contact

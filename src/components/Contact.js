import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Connect with Us</h1>
        <p>We would love to respond to respond to your queries. Feel free to get in touch with us!</p>

        <div className="contact-container">
            <form action="">
                <h3>Send Message</h3>
                <input type="text" placeholder='Full Name'/>
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Type your Message...'/>
                <button>Send</button>
            </form> 
            <div className="contact-info">
                <h3>Reach Us</h3>
                <div className='info-item'>
                    <span>Address</span>
                    <p>23, Sagar Villa, Indore(M.P.)</p>
                </div>
                <div className='info-item'>
                    <span>Phone</span>
                    <p>+91 95222-XXXXX</p>
                </div>
                <div className='info-item'>
                    <span>Email</span>
                    <p>democompany@gmail.com</p>
                </div>
            </div>
        </div>



    </div>
  )
}


export default Contact
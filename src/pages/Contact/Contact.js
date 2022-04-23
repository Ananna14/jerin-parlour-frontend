import React from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import cover from '../../contact-icon/Contact us_topbanner_cropped.jpg'
import Footer from '../Footer/Footer';
import './Contact.css'

const Contact = () => {
   
    return (
        <div className='bg-light'>
                <img src={cover} className="img-fluid" alt="" />
                <h2 className='text-center my-5'>Contact Us</h2>
            {/* contact-detail-start */}
            <div className='d-flex container '>
               <div className='row p-5'>
                    <div className='col-sm-5 col-md-3'>
                        <img src="https://i.ibb.co/JycWDRb/phone.png" alt="" />
                        <h4>CALL US</h4>
                        <p>+8801923970212,01776-502993</p>
                    </div>
                   
                    <div className='col-sm-5 col-md-3'>
                        <img src="https://i.ibb.co/19PMjNf/Capture.png" alt="" />
                        <h4>OFFICE LOCATION</h4>
                        <p>Suite 02, Level 12, Sahera Tropical Center</p>
                    </div>
                    <div className='col-sm-5 col-md-3'>
                        <img src="https://i.ibb.co/4K0RRHT/msg.png" alt="" />
                        <h4>EMAIL</h4>
                        <p>support@helpinghand.org</p>
                    </div>
                    <div className='col-sm-5 col-md-3'>
                        <img src="https://i.ibb.co/ryq7810/ww.png" alt="" />
                        <h4>WEBSITE</h4>
                        <p>http://helpinghand.org</p>
                    </div>
               </div>
            </div>
             {/* contact-form-end */}
      <div>
           <h2>GET <span className='pink-color mt-5'>IN TOUCH</span></h2>
           {/* input */}
           <>
              <div className="container contact-form mt-5">
              <div className='row'>
                    
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3 w-70 px-1"
                    >
                    <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password" className="px-1">
                        <Form.Control type="password" placeholder="Password" className="mb-3 w-70"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Enter Your Phone" className="px-1">
                        <Form.Control type="password" placeholder="Enter Your Phone" className="mb-3 w-70"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments" className="px-1">
                    <Form.Control
                    as="textarea"
                    className="mb-3 w-70"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    />
                    </FloatingLabel>
                    <button type="submit" className='bg p-2 px-3 mb-5'>Send Message</button>
                </div>
              </div>
            </>
     
      </div>
        <Footer/>
        </div>
    )
}

export default Contact

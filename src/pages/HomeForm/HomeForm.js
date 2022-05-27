import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const HomeForm = () => {
  return <div className="part-bg">
               <h2 className="fw-bold pt-5">Let us handle your<br/> project, professionally.</h2>
              <div className="container mt-5">
                       <div className="row">
                          <div className="col col-lg-6 col-12">
                            <FloatingLabel controlId="floatingPassword" label="Full Name" className="px-1">
                              <Form.Control type="password" placeholder="Full Name" className="mb-3 w-70"/>
                          </FloatingLabel>
                          </div>
                          <div className="col col-lg-6 col-12">
                            <FloatingLabel controlId="floatingPassword" label="Last Name" className="px-1">
                              <Form.Control type="password" placeholder="Last Name" className="mb-3 w-70"/>
                          </FloatingLabel>
                          </div>
                        </div>
                {/* email and phone number */}
                 <div className='row'>
                    <div className="col col col-lg-6 col-12">
                      <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3 w-70 px-1"
                        >
                        <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </div>
              
                    <div className="col col col-lg-6 col-12">
                      <FloatingLabel controlId="floatingPassword" label="Enter Your Phone" className="px-1">
                            <Form.Control type="password" placeholder="Enter Your Phone" className="mb-3 w-70"/>
                        </FloatingLabel>
                    </div>
       
                        <div>
                          <FloatingLabel controlId="floatingTextarea2" label="Comments" className="px-1">
                            <Form.Control
                            as="textarea"
                            className="mb-3 w-40"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                            </FloatingLabel>
                            <button type="submit" className='bg p-2 px-3 mb-5'>Send Message</button>
                        </div>
                </div>

            </div>
     <Footer/>
  </div>;
};

export default HomeForm;

import React, { useState } from 'react';
import icon from '../../Image_Icon/Icon/Group 573.png'
import iconTop from '../../Image_Icon/Group 33092.png'
import './Login.css'
import { Link } from 'react-router-dom';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const Login = () => {
  const [loginData, setLoginData] = useState({});

  //1.
  const handleOnChange = e =>{
  const field = e.target.name;
  const value = e.target.value;
  // console.log(field, value)
  const newLoginData = {...loginData};
  newLoginData[field] = value;
  console.log(newLoginData)
  setLoginData(newLoginData);
  }

  //2.
  const handleLoginSubmit = e =>{
   alert('hello')
   e.preventDefault();
  }
  return <div className='login-page'>
      <img className='iconTop my-5' src={iconTop} alt="" />
        <h2 className='fw-bold'>Login with</h2>
        {/* FORM-ADDED */}
        
            <div className='container'>
              <div className="row">
                <form onSubmit={handleLoginSubmit}>
                  <FloatingLabel
                      controlId="floatingInput"
                      label="Username or email"
                      name="email"
                      onChange={handleOnChange}
                      className="mb-3 w-70 px-1"
                    >
                    <Form.Control type="Username or email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" onChange={handleOnChange} label="Password" className="px-1">
                    <Form.Control type="password" placeholder="Password" className="mb-3 w-70"/>
                    </FloatingLabel>
                    <button type="submit" className='bg p-2 px-3 mb-5'>Login</button>
                </form>
              </div>
            </div>

      {/* img-added */}
       <div>
          <button className='btn-google my-5'>
            <div className="double-edit">
              <div><img className='icon' src={icon} alt="" /></div>
              <div className='mx-5'>Continue with google</div>
                
            </div>
            
          </button> 
        </div>
         <h6 className=''>Already have an account? <Link to="/register" className="pink-color">create an account</Link></h6> 
  </div>;
};

export default Login;

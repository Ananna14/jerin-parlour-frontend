import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from '../../Image_Icon/Icon/Group 573.png'
import { useState } from 'react';
import './Register.css'
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
   

    const { user, registerUser, isLoading, authError } = useAuth()

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        const newLoginData = {...loginData};
        // console.log(newLoginData);
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleOnSubmit = e =>{
        // alert('Register successfully');
      if(loginData.password !== loginData.password2){
          alert('your password did not match')
          return;
      }
    //   registerUser(loginData.email, loginData.passward);
    registerUser(loginData.email, loginData.password );
        e.preventDefault();
    }
    
  return <div className='register-design'>
                 {/* form */}
              <div className="container contact-form mt-5">
                <div className='row border'>
                    <h3 className='fw-bold text-sm-start my-5'>Create an account</h3>
                         <form onSubmit={handleOnSubmit}>
                            <div class="mb-3">
                               <input type="text" class="form-control" name="First Name" onChange={handleOnChange} id="exampleFormControlInput1" placeholder="First Name"/>
                            </div>
                            <div class="mb-3">
                               <input type="text" class="form-control" name="Last Name" onChange={handleOnChange} id="exampleFormControlInput1" placeholder="Last Name"/>
                            </div>
                            <div class="mb-3">
                               <input type="email" class="form-control" name="email" onChange={handleOnChange} id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="col-auto mb-3">
                                <input type="password" class="form-control" name="password" onChange={handleOnChange} id="inputPassword2" placeholder="Password"/>
                            </div>
                            <div class="col-auto mb-3">
                                <input type="confirm-password" class="form-control" name="password2" onChange={handleOnChange} id="inputPassword2" placeholder="Confirm-Password"/>
                            </div>
                           
                              <button type="submit" className='bg p-2 px-3 mb-5'>Create an account</button>
                         </form>
                         {isLoading && <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>}
                         {user?.email && <div class="alert alert-success" role="alert">
                           User Created Successfully!
                            </div>}
                            {authError && <div class="alert alert-danger" role="alert">
                            {authError}
                            </div>}
                        <h6>Already have an account? <Link to="/login" className="pink-color">Login</Link></h6>               
                    </div>
                   {/* OR */}
                  <div className='text-center my-5'> ______________ Or ______________</div>
              </div>
                   {/* login-icon */}
              <div className='mb-2'>
                    <button className='btn-google my-5'>
                        <div className="double-edit">
                            <div><img className='icon' src={icon} alt="" /></div>
                            <div className='mx-5'>Continue with google</div>
                        </div>
                        
                    </button> 
                </div>
            </div>;
};

export default Register;

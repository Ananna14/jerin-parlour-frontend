import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from '../../Image_Icon/Icon/Group 573.png'
import { useState } from 'react';
import './Register.css'

const Register = () => {
    const [loginData, setLoginData] = useState({});

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
        alert('Register successfully');
    //   if(loginData.password !== loginData.confirm-password){
    //       alert('your password did not match')
    //       return;
    //   }
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
                                <input type="confirm-password" class="form-control" name="confirm-password" onChange={handleOnChange} id="inputPassword2" placeholder="Confirm-Password"/>
                            </div>
                           
                              <button type="submit" className='bg p-2 px-3 mb-5'>Create an account</button>
                         </form>
                        <h6>Already have an account? <Link to="/login" className="pink-color">Login</Link></h6>               
                    </div>
                   {/* OR */}
                  <div className='text-center my-5'> ______________ Or ______________</div>
              </div>
                   {/* login-icon */}
              <div>
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

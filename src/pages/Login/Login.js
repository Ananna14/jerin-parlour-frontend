import React, { useState } from 'react';
import icon from '../../Image_Icon/Icon/Group 573.png'
import iconTop from '../../Image_Icon/Group 33092.png'
import './Login.css'
import { Link } from 'react-router-dom';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {user, loginUser, isLoading, authError} = useAuth();

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
    loginUser(loginData.email, loginData.password);
   e.preventDefault();
  }
  return <div className='login-page'>
     <Link to="/home"><img className='iconTop my-5' src={iconTop} alt="" /></Link>
        <h2 className='fw-bold'>Login with</h2>
        {/* FORM-ADDED */}
        
            <div className='container'>
              <div className="row">
                <form onSubmit={handleLoginSubmit}>
                {isLoading && <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>}
                    {user?.email && <div class="alert alert-success" role="alert">
                           User Login Successfully!
                            </div>}
                            {authError && <div class="alert alert-danger" role="alert">
                            {authError}
                            </div>}
                            <div class="mb-3">
                               <input type="email" class="form-control" name="email" onChange={handleOnChange} id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="col-auto mb-3">
                                <input type="password" class="form-control" name="password" onChange={handleOnChange} id="inputPassword2" placeholder="Password"/>
                            </div>
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

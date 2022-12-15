import { useState } from 'react';
import iconTop from '../../Image_Icon/Group 33092.png'
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {user, loginUser, isLoading, authError, signInWithGoogle} = useAuth();

  // redirect
  const location = useLocation();
  const navigate = useNavigate();

  //1.
  const handleOnChange = e =>{
  const field = e.target.name;
  const value = e.target.value;
  // console.log(field, value)
  const newLoginData = {...loginData};
  newLoginData[field] = value;
  // console.log(newLoginData)
  setLoginData(newLoginData);
  }

  //2.
  const handleLoginSubmit = e =>{
    // redirect-location-history
    loginUser(loginData.email, loginData.password, location, navigate);
   e.preventDefault();
  }
  return <div className='login-page py-5'>
     <Link to="/home"><img className='iconTop my-5' src={iconTop} alt="" /></Link>
        <h2 className='fw-bold'>Login with</h2>
        {/* FORM-ADDED */}
        
            <div className='container'>
              <div className="row">
                <form onSubmit={handleLoginSubmit}>
                {isLoading && <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </div>}
                            <div className="mb-3">
                               <input type="email" className="form-control" name="email" onChange={handleOnChange} id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="col-auto mb-3">
                                <input type="password" className="form-control" name="password" onChange={handleOnChange} id="inputPassword2" placeholder="Password"/>
                            </div>
                    <button type="submit" className='bg p-2 px-3 mb-5'>Login</button>
                </form>
                {user?.email && <div className="alert alert-success" role="alert">
                           User Login Successfully!
                            </div>}
                            {authError && <div className="alert alert-danger" role="alert">
                            {authError}
                            </div>}
                
              </div>
             
            </div>

      {/* img-added */}
       {/* <div>
          <button className='btn-google my-5'>
            <div className="double-edit">
              <div><img className='icon' src={icon} alt="" /></div>
              <div className='mx-5' onClick={() => signInWithGoogle(location, navigate)}>Continue with google</div>
                
            </div>
            
          </button> 
        </div> */}
         <h6 className=''>Already have an account? <Link to="/register" className="pink-color">create an account</Link></h6> 
  </div>;
};

export default Login;

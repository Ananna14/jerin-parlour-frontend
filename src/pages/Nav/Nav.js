import React from 'react'
import logo from '../../Image_Icon/Group 33092.png'
import { Link } from 'react-router-dom';
import './Nav.css'
import useAuth from '../../hooks/useAuth';


const Nav = () => {
  const {user, logOut} = useAuth();
    return (
 <div className='part-bg'>
     <nav className="navbar navbar-expand-lg navbar-light full-bg my-lg-0 dashbord">
        <div className="container-fluid col-12">
          <div className="">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" width="150" height="50" />
            </a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-design" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 card-design">
                    <li className="nav-item">
                    <Link className='text-nav' to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='text-nav' to="/contact">Contact Us</Link>
                    </li><br/>
                    <li className="nav-item">
                    <Link className='text-nav' to="/admin/admin/review">Dashboard</Link>
                    </li><br/>
                     {
                       user?.email ? 
                    <button onClick={logOut} className='text-nav bg-log'>LogOut</button>
              
                       :
                       <li className="nav-item">
                     <Link className='text-nav bg-log' to="/login">Login</Link>
                     </li>
                     }
                </ul>
          </div>
        </div>
      </nav>
 </div>
    )
}

export default Nav

import React from 'react'
import logo from '../../Image_Icon/Group 33092.png'
import { Link } from 'react-router-dom';
import './Nav.css'
import useAuth from '../../hooks/useAuth';


const Nav = () => {
  const {user, logOut} = useAuth();
    return (
 <div>
     <nav className="navbar navbar-expand-lg navbar-light full-bg my-lg-0 dashbord">
        <div className="container-fluid col-12">
          <div className="">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" width="150" height="50" />
            </a>
          </div>
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-design" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 card-design">
                    <li className="nav-item">
                    <Link className='text-nav' to="/home">Home</Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link className='text-nav' to="/cards">Cards</Link>
                    </li> */}
                    <li className="nav-item">
                    <Link className='text-nav' to="/contact">Contact Us</Link>
                    </li><br/>
                    <li className="nav-item">
                    <Link className='text-nav' to="/admin/admin/book">Admin</Link>
                    </li><br/>
                     {
                       user?.email ? 
                     
                    //  <Link>LogOut</Link>
                    <button onClick={logOut} className='text-nav bg-log'>LogOut</button>
              
                       :
                       <li className="nav-item">
                     <Link className='text-nav bg-log' to="/login">Login</Link>
                     </li>
                     }
                     
                   {/* {
                     user?.email ?
                     <Link class='text-nav bg-log' onClick={logOut}>LogOut</Link>
                     :
                     <li class="nav-item">
                     <Link class='text-nav bg-log' to="/login">Login</Link>
                     </li>
                   } */}
                </ul>
          </div>
        </div>
      </nav>
 </div>
    )
}

export default Nav

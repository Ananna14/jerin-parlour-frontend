import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Book from '../Book/Book';
import './Admin.css'
import logo from '../../Image_Icon/Group 33092.png'


const Admin = () => {
  
  return <div>
    {/* -----------nav-start----------- */}
    <nav class="navbar navbar-expand-lg navbar-light offcanvas-sidebar-bg dashbord">
  <div class="container-fluid">
  <img src={logo} alt="" width="150" height="50" />
    <h5 class="p-2 dashbord-text">Dashbord</h5>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <button class="btn-off dashbord" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><span className="navbar-toggler-icon bg-dark"></span> Dashbord</button> */}
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    </div>
  </div>
</nav>
{/* ---------------nav-end------------ */}

{/* -------------------------offcanvas-start------------------- */}
                    <div className="bg-book">

                 
                    {/* <button style={{ width: '111%' }} class="btn mt-0 btn-off" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><span className="navbar-toggler-icon bar bg-dark"></span>Enable body scrolling</button> */}

                    <div class="offcanvas offcanvas-start sidebar-nav offcanvas-sidebar-bg" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                  
                      
                      <div class="offcanvas-header">
                     
                            <div class="text-start mt-5">
                              <Link class="item lh-lg" to={`/home`}><i class="fa-solid fa-house-chimney px-3"></i>Home</Link><br/>
                              <Link class="item lh-lg" to={`/admin/admin/book`}><i class="fa-solid fa-address-book px-3"></i>Book</Link><br/>
                              <Link class="item lh-lg" to={`/admin/admin/booking`}><i class="fa-solid fa-address-book px-3"></i>Booking list</Link><br/>
                              <Link class="item lh-lg" to={`/admin/admin/review`}><i class="fa-solid fa-magnifying-glass px-3"></i>Review</Link><br/>
                              <Link class="item lh-lg" to={`/admin/admin/addService`}><i class="fa-solid fa-plus px-3"></i>Add Service</Link><br/>
                              <Link class="item lh-lg" to={`/admin/admin/makeAdmin`}><i class="fa-solid fa-users-line px-3"></i>Make Admin</Link><br/>
                              <Link class="item lh-lg" to={`/admin/admin/list`}><i class="fa-regular fa-camera-retro px-3"></i>Order list</Link><br/>
                            </div>
                          
                        {/* <button type="button" class="btn-close text-reset cross-icon" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                      </div>
                    </div>
                    </div>
                 {/* -------------------------offcanvas-end------------------- */}
        
  </div>;
     
};

export default Admin;

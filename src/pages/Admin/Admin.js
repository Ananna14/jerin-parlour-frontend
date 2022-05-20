import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Admin.css'
import logo from '../../Image_Icon/Group 33092.png'


const Admin = () => {
  
  return <div>
    {/* -----------nav-start----------- */}
    <nav className="navbar navbar-expand-lg navbar-light offcanvas-sidebar-bg dashbord">
  <div className="container-fluid">
  <img src={logo} alt="" width="150" height="50" />
    <h5 className="p-2 dashbord-text">Dashbord</h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    </div>
  </div>
</nav>
{/* ---------------nav-end------------ */}

{/* -------------------------offcanvas-start------------------- */}
                    <div classNameName="bg-book">
                    <div className="offcanvas offcanvas-start sidebar-nav offcanvas-sidebar-bg" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                  
                      
                      <div className="offcanvas-header">
                     
                            <div className="text-start mt-5">
                              <Link className="item lh-lg" to={`/home`}><i className="fa-solid fa-house-chimney px-3"></i>Home</Link><br/><br/>
                              {/* <Link className="item lh-lg" to={`/admin/admin/book`}><i className="fa-solid fa-address-book px-3"></i>Book</Link><br/> */}
                              <Link className="item lh-lg" to={`/admin/admin/booking`}><i className="fa-solid fa-address-book px-3"></i>Booking list</Link><br/><br/>
                              <Link className="item lh-lg" to={`/admin/admin/review`}><i className="fa-solid fa-magnifying-glass px-3"></i>Review</Link><br/><br/>
                              <Link className="item lh-lg" to={`/admin/admin/pay`}><i class="fa-solid fa-clipboard-user px-3"></i>Pay</Link><br/><br/>
                              {/* <Link className="item lh-lg" to={`/admin/admin/addService`}><i className="fa-solid fa-plus px-3"></i>Add Service</Link><br/><br/> */}
                              {/* <Link className="item lh-lg" to={`/admin/admin/makeAdmin`}><i className="fa-solid fa-users-line px-3"></i>Make Admin</Link><br/> */}
                              {/* <Link className="item lh-lg" to={`/admin/admin/list`}><i className="fa-regular fa-camera-retro px-3"></i>Order list</Link><br/> */}
                            </div>
                      </div>
                    </div>
                    </div>
                 {/* -------------------------offcanvas-end------------------- */}
                 <main>
                   {/* <Book/> */}
                 
                 </main>
        
  </div>;
     
};

export default Admin;

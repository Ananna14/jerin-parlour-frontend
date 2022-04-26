import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';
import './Admin.css'


const Admin = () => {
  
  return <div class="bg-book">
                     <div class="offcanvas offcanvas-start sidebar-nav offcanvas-sidebar-bg" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                      <div class="offcanvas-header">
                            {/* <Link to="/home">
                              <span><i class="fa-solid fa-cart-shopping"></i></span>
                              <span><p>Book</p></span>
                            </Link> */}
 
                            <div class="text-start">
                              <Link class="item" to={`/admin/admin/book`}><i class="fa-solid fa-address-book px-3"></i>Book</Link><br/>
                              <Link class="item" to={`/admin/admin/booking`}><i class="fa-solid fa-address-book px-3"></i>Booking list</Link><br/>
                              <Link class="item" to={`/admin/admin/review`}><i class="fa-solid fa-magnifying-glass px-3"></i>Review</Link><br/>
                              <Link class="item" to={`/admin/admin/addService`}><i class="fa-solid fa-plus px-3"></i>Add Service</Link><br/>
                              <Link class="item" to={`/admin/admin/makeAdmin`}><i class="fa-solid fa-users-line px-3"></i>Make Admin</Link><br/>
                              <Link class="item" to={`/admin/admin/list`}><i class="fa-regular fa-camera-retro px-3"></i>Order list</Link><br/>
                            </div>
                          
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                      </div>
                    </div>
        
  </div>;
     
};

export default Admin;

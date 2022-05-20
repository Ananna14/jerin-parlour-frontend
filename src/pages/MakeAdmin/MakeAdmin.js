import React from 'react';
import { Container } from 'react-bootstrap';
import Admin from '../Admin/Admin';
import './MakeAdmin.css'

const MakeAdmin = () => {
  return <div>
 <Admin/>
 <main>
    <div class="bg-book makeAdmin-bg">
      <h3 class="p-3 fw-bold text-start">Make Admin</h3>
      <input type="email" name="" id="" class="w-50 mb- p-2 border-color" /><br/><br/>
      <input type="submit" value="Submit" className='btn-color'/> 
    </div>
 </main>
  </div>;
};

export default MakeAdmin;

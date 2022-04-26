import React from 'react';
import Admin from '../Admin/Admin';
import './MakeAdmin.css'

const MakeAdmin = () => {
  return <div>
    <Admin/>
   <main class="bg-book makeAdmin-bg">
   <h3 class="p-3 fw-bold text-start">Make Admin</h3>
   <input type="email" name="" id="" class="w-50 mb- p-2 border-color" />
   <input type="submit" className='border-color bg m-2'/><br/>
   </main>
  </div>;
};

export default MakeAdmin;

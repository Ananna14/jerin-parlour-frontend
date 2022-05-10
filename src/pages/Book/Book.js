import React from 'react'
import Admin from '../Admin/Admin'

const Book = () => {
  return (
    <div>
      <Admin/>
      <main className="text-bg bg-book">
      <h3 className="p-3 fw-bold text-start">Book</h3>
      {/* form */}
      <div>
      <form class="">
         <input type="text" className="w-50 p-2 col-lg-12" placeholder='Name'/><br/><br/>
         <input type="email" className="w-50 p-2" name="" id="" placeholder='Email' /><br/><br/>
         <textarea name="" className="w-50 p-2" placeholder='Description' id=""></textarea><br/><br/>
      </form>
      </div>
    </main>
    </div>
  )
}

export default Book
import React from 'react'
import Admin from '../Admin/Admin'

const Book = () => {
  return (
    <div>
      <Admin/>
      <main class="text-bg bg-book">
      <h3 class="p-3 fw-bold text-start">Book</h3>
      {/* form */}
      <div>
      <form class="">
         <input type="text" class="w-50 p-2 col-lg-12" placeholder='Name'/><br/><br/>
         <input type="email" class="w-50 p-2" name="" id="" placeholder='Email' /><br/><br/>
         <textarea name="" class="w-50 p-2" placeholder='Description' id=""></textarea><br/><br/>
      </form>
      </div>
    </main>
    </div>
  )
}

export default Book
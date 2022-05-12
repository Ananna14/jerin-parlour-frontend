import React, { useEffect, useState } from 'react'
import Admin from '../Admin/Admin'

const OrderList = () => {
  const [ services, setServices ] = useState([]);
  useEffect( ()=>{
            fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data))
  }, [])
  const handleDelete = id =>{
    const url = `http://localhost:5000/services/${id}`
    fetch(url, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.deletedCount){
        alert('deleted');
        const remaining = services.filter(service => service._id !== id);
        setServices(remaining);
      }
    
    })
  }
  return (
    <div>
        <Admin/>
        <main className="bg-book">
        <h3>Order list</h3>
        {
          services.map(service => <div key={service._id}>
            <h3>{service.Title}</h3>
            <button onClick={() => handleDelete(service._id)}>Delete</button>
          
          </div>)
        }
        </main>
    </div>
  )
}

export default OrderList
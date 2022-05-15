import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
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
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
    <th>Item</th>
    <th>Name</th>
    <th>Email</th>
    <th>Price</th>
    <th>Status</th>
    <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {
          services.map(service => <div key={service._id}>
             <tr>
                <td>{service.Title}</td>
                <td>Mark</td>
                <td>Otto</td>
                <td><button onClick={() => handleDelete(service._id)}>Delete</button></td>
              </tr>
              {/* <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr> */}
            {/* <h3>{service.Title}</h3> */}
            {/* <button onClick={() => handleDelete(service._id)}>Delete</button> */}
          
          </div>)
        }
{/*     
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</Table>
        {/* {
          services.map(service => <div key={service._id}>
            <h3>{service.Title}</h3>
            <button onClick={() => handleDelete(service._id)}>Delete</button>
          
          </div>)
        } */}
        </main>
    </div>
  )
}

export default OrderList
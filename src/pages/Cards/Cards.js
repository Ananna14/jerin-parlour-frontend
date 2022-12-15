import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SingleCard from '../SingleCard/SingleCard'
import './Cards.css'

const Cards = () => {
    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_URL}/services`)
        .then(res => res.json())
        .then(data => {
            setCards(data.data)
        })
        
    },[])
    return (
     <div className='bg-card'>
         {/* <Nav/> */}
        <div>
              <h2 className='p-5'>Our Awesome<span className="pink-color">Services</span></h2>
            {
                <Row xs={1} md={2} className="g-4">
                    {
                        cards.map(card =><SingleCard
                            key={card._id}
                            card={card}
                        ></SingleCard>)
                    }
                </Row>
            }
        </div>
        <Link to="/cards"><button type="submit" className='btn'>Explore more</button></Link>
     </div>
    )
}

export default Cards

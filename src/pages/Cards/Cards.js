import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../SingleCard/SingleCard'
import './Cards.css'

const Cards = () => {
    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
     <div className='bg-card'>
        <div>
              <h2 className='p-5'>Our Awesome <span className="pink-color">Services</span></h2>
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
        <button type="submit" className='btn'>Explore more</button>
     </div>
    )
}

export default Cards

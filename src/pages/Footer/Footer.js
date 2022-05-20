import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
           <div className='bg-color'>
              {/* part-1-start */}
              <div className="row align-center">
                        <div className=' col-12 col-lg-3 fw-bold mt-5 first-part'>
                        <h5>H#000 (0th Floor), Road #00,<br/>
                            New DOHS, Mohakhali, Dhaka, Bangladesh
                        </h5>
                        </div>
                        <div className=' col-12 col-lg-3 fw-bold mt-5 second-part'>
                            <h4>Company</h4>
                            <h6>About</h6>
                            <h6>Project</h6>
                            <h6>Our Team</h6>
                            <h6>Terms Conditions</h6>
                            <h6>Submit Listing</h6>
                        </div>
                    {/* part-2-end */}
                    {/* part-3-start */}
                            <div className='col-12 col-lg-3 third-part mt-5'>
                                <h4 className='fw-bold'>Quick Links</h4>
                                <h6>Quick Links</h6>
                                <h6>Rentals</h6>
                                <h6>Sales</h6>
                                <h6>Contact</h6>
                                <h6>Our blog</h6>
                            </div>
                    {/* part-3-end */}
                    {/* part-4-start */}
                        <div className='col-12 col-lg-3 fw-bold four-part mt-5'>
                            <h4>About Us</h4>
                            <h5>A beauty parlour is a place where<br/>
                            people can go to have beauty treatments,<br/>
                            for example to have their hair, nails or make-up done.</h5>
                        </div>
                    {/* part-4-end */}
               </div>
            </div>
    )
}

export default Footer

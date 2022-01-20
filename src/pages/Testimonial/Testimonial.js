import React from 'react'
import nash from '../../Image_Icon/Image/Ellipse 90.png'
import './Testmonial.css'

const Testimonial = () => {
    return (
        <div className='testimonial-white'>
            <div className="container">
                <h1 className="mt-5">Testimonials</h1>
                <div className="row my-5">
                    <div class="owl-carousel owl-theme">
                        <div class="item">
                            <div className="card">
                                <img src={nash} alt="image" className="card-img-top" />
                                <div className="card-body">
                                    <p>Look at this example of a long, rambling testimonial… <br/>
                                        “I just wanted to share a quick note and let you know that
                                        you guys do a really good job. I'm glad I decided to work with you.
                                        It's really great how easy your websites are to update and manage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Testimonial
  {/* <div>
                    <img src={nash} alt="" />
                </div>
                <div className='text-center'>
                    <h5>Nash Patrik</h5>
                    <h6>CEO, Manpol</h6>
                </div> */}

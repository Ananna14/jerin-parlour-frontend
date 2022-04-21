import React from 'react'
import './Testmonial.css'
import girl from '../../Image_Icon/Image/Ellipse 90.png'
import girl2 from '../../Image_Icon/Image/Ellipse 91.png'
import girl3 from '../../Image_Icon/Image/Ellipse 92.png'

const Testimonial = () => {
  return (
        <div class="bg-white">
            <div className="container">
            <section id="feedback">
                <div className='section-title'>
                   <h3 className="text-center mb-5">Testimonials</h3>
                   {/* <hr className="hr-style" /> */}
                </div>
                {/* -----------row------------- */}
                <div className="row">
                    <div className="col-lg-lg">
                        {/* carousel */}
                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img className='feedback-img' src={girl} alt="" />
                                    <h4 class="mt-3">Nash Patrik</h4>
                                    <p class="fst-italic">Item1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, esse. Consequuntur adipisci at vero vitae.</p>
                                <div class="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img className='feedback-img' src={girl2} alt="" />
                                    <h4 class="mt-3">Nash Patrik</h4>
                                    <p class="fst-italic">Item2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, esse. Consequuntur adipisci at vero vitae.</p>
                                <div class="carousel-caption d-none d-md-block">
                    </div>
                        </div>
                        <div class="carousel-item">
                            <img className='feedback-img' src={girl3} alt="" />
                            <h4 class="mt-3">Nash Patrik</h4>
                            <p class="fst-italic">Item1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, esse. Consequuntur adipisci at vero vitae.</p>
                        <div class="carousel-caption d-none d-md-block">
                        
                        </div>
                        </div>
                    </div>
                    <br/><br/>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
  )
}

export default Testimonial
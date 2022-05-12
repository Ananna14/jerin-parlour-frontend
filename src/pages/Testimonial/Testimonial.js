
import './Testmonial.css'
import girl from '../../Image_Icon/Image/Ellipse 90.png'
import girl2 from '../../Image_Icon/Image/Ellipse 91.png'
import girl3 from '../../Image_Icon/Image/Ellipse 92.png'
import { useEffect, useState } from 'react'


const Testimonial = () => {
    const { reviews, setReviews } = useState([]);
    // const {firstName, Description} = review;

    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then( data => console.log(data))
            // .then(res => setReviews(res.data))
            // .catch(err => console.log(err))
    }, []);

    // reviews.map(r => {
        return (
            <div className="bg-white">
              
                <div className="container">
                <section id="feedback">
                    <div className='section-title'>
                       <h3 className="text-center mb-5">Testimonials</h3>
                       {/* <hr className="hr-style" /> */}
                    </div>
                
                    {/* -----------row------------- */}
                  {/* {reviews.map((review, index)=>( */}
                        <div className="row">
                        <div className="col-lg-12">
                            {/* carousel */}
                            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <img className='feedback-img' src={girl} alt="" />
                                        <h4 className="mt-3">sam</h4>
                                        <p className="fst-italic">Lorem ipsum dolor sit amet.</p>
                                    <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                                    {/* <div className="carousel-item" data-bs-interval="2000">
                                        <img className='feedback-img' src={girl2} alt="" />
                                        <h4 className="mt-3">Nash Patrik</h4>
                                        <p className="fst-italic">Lorem ipsum dolor sit amet.</p>
                                    <div className="carousel-caption d-none d-md-block">
                        </div>
                            </div>
                            <div className="carousel-item">
                                <img className='feedback-img' src={girl3} alt="" />
                                <h4 className="mt-3">Nash Patrik</h4>
                                <p className="fst-italic">Lorem ipsum dolor sit amet.</p>
                            <div className="carousel-caption d-none d-md-block">
                            
                            </div>
                            </div> */}
                        </div>
                        <br/><br/>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                        </div>
                    </div>
                  {/* ))} */}
                </section>
            </div>
        </div>
      )
    // })

    }
  
export default Testimonial
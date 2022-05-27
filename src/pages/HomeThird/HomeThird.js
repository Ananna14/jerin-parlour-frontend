import React from 'react'
import second from '../../Image_Icon/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'
import './HomeThird.css'

const HomeThird = () => {
    return (
    <>
        <div className="part-bg">
                <div className='d-flex container'>
                    {/* part-1 */}
                   <div className="row padding-banner">
                        <div className='col-lg-6'>
                            <img src={second} className='img-fluid' alt="" />
                        </div>
                          {/* second-part */}
                       <div className='text-sm-start col-lg-6 col-12 text-design margin-text'>
                            <h2 className='fw-bold'>Let us handle your<br/>screen <span>Professionally.</span></h2><br/>
                            <p>A beauty parlour is a place where<br/>
                            people can go to have beauty treatments,<br/>
                            for example to have their hair, nails or make-up done.</p><br/>
                              {/* paert-1-second-end */}
                                <div className='d-flex'>
                                    <div>
                                        <h1 className='pink-color'>500+</h1>
                                        <p>Happy Customer</p>
                                    </div>
                                    <div className='total-service'>
                                        <h1 className='pink-color'>16+</h1>
                                        <p>Total Service</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
         </div>
     </>
    )
}

export default HomeThird

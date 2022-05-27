import useAuth from '../../hooks/useAuth'
import girl from '../../Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
import Cards from '../Cards/Cards'
import HomeForm from '../HomeForm/HomeForm'
import HomeThird from '../HomeThird/HomeThird'
import Nav from '../Nav/Nav'
import Testimonial from '../Testimonial/Testimonial'
import './HomePartOne.css'

const HomePartOne = () => {
    const { isLoading } = useAuth();
    return (
         <>
          {isLoading && <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>}
         <Nav/>
            <div className="part-bg">
                <div className='d-flex p-5'>
                   {/* part-1 */}
                  <div className="row full-bg">
                        <div className='mt-5 ty col-lg-6 col-12 text-design'>
                            <h1 className='fw-bold text-design'>BEAUTY SALON<br/>FOR EVER WOMEN</h1><br/>
                            <p>A beauty parlour is a place where<br/>
                            people can go to have beauty treatments,<br/>
                            for example to have their hair, nails or make-up done.</p><br/>
                            <button type="submit" className='bg p-2 px-3 mb-5'>Get an Appointment</button>
                        </div>
                        {/* second-part */}
                        <div className='col-lg-6'>
                           <img src={girl} className='img-fluid' alt="" />
                        </div>
                  </div>
                </div>
            </div>
               <Cards/>
               <HomeThird/>
               <Testimonial/>
               <HomeForm/>
         </>
               
    )
}

export default HomePartOne

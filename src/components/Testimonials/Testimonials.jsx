import React from 'react'
import './Testimonials.css'





import arrowLeft from "../../img/arrow-left.svg";
import arrowRight from "../../img/arrow-right.svg";



const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="title">
                <h2>Testimonials</h2>
            </div>

            <div className="cards-wrapper">
                <div className="card">
                    <div className="pic">

                    </div>
                    <div className="text">
                        <h3>Al Khat Alaraby</h3>
                        <h4>Mobile App UX Research and Design</h4>

                        <div className="icons">

                        </div>
                    </div>
                </div>
            </div>


            <div className="arrows">
                <img src={arrowLeft} className="arrow arrow-left" alt="arrow left scroll" />
                <img src={arrowRight} className="arrow arrow-right" alt="arrow right scroll" />
            </div>
        </div>
    )
}

export default Testimonials
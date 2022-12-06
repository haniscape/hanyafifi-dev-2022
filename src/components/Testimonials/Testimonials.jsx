import React from 'react'
import './Testimonials.css'

import logoHuman from "../../img/logo-human.svg";
import logoBordersNone from "../../img/logo-bordersnone.svg";
import logoPerpetuum from "../../img/logo-perpetuum.svg";
import logoCloudypedia from "../../img/logo-cloudypedia.svg";

import arrowLeft from "../../img/arrow-left.svg";
import arrowRight from "../../img/arrow-right.svg";



const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="title">
                <h2>Testimonials</h2>
            </div>

            <div className="container">
                <div className="wrapper">
                    <div className="testimonials-slider">
                        <div className="card">
                            <img src={logoHuman} className="employer-logo" alt="Human Interactive" />
                        </div>
                        <div className="card active">
                            <div className="testimonial-employer"></div>
                            <img src={logoBordersNone} className="employer-logo" alt="Borders None" />
                            <div className="testimonial-colleague"></div>
                        </div>
                        <div className="card">
                            <img src={logoPerpetuum} className="employer-logo" alt="Perpetuum Mobile" />
                        </div>
                        <div className="card">
                            <img src={logoCloudypedia} className="employer-logo" alt="Cloudypedia" />
                        </div>
                    </div>
                    <div className="arrows">
                        <img src={arrowLeft} className="arrow arrow-left" alt="arrow left scroll" />
                        <img src={arrowRight} className="arrow arrow-right" alt="arrow right scroll" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Testimonials
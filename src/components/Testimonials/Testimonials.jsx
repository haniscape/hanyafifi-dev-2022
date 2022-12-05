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

            <div className="wrapper">
                <div className="testimonials-slider">
                    <div className="card greyed">
                        <img src={logoHuman} className="logo" alt="Human Interactive" />
                    </div>
                    <div className="card active">
                        <img src={logoBordersNone} className="logo" alt="Borders None" />
                    </div>
                    <div className="card greyed">
                        <img src={logoPerpetuum} className="logo" alt="Perpetuum Mobile" />
                    </div>
                    <div className="card greyed">
                        <img src={logoCloudypedia} className="logo" alt="Cloudypedia" />
                    </div>
                </div>



                <div className="arrows">
                    <img src={arrowLeft} className="arrow arrow-left" alt="arrow left scroll" />
                    <img src={arrowRight} className="arrow arrow-right" alt="arrow right scroll" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
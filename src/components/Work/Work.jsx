import React from 'react'
import './Work.css'

import arrowLeft from "../../img/arrow-left.svg";
import arrowRight from "../../img/arrow-right.svg";



const Work = () => {
    return (
        <div className="container">
            <div className='work'>
                <div className="title">
                    <h1>Portfolio</h1>
                </div>

                <div className="arrows">
                    <img src={arrowLeft} className="arrow arrow-left" alt="arrow left scroll" />
                    <img src={arrowRight} className="arrow arrow-right" alt="arrow right scroll" />
                </div>
            </div>

        </div>

    )
}

export default Work
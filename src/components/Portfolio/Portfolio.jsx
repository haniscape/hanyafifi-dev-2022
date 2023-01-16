import React from 'react'
import './Portfolio.css'
import iconBehance from "../../img/portfolio-icon-behance.svg";
import iconGithub from "../../img/portfolio-icon-github.svg";
import iconLink from "../../img/portfolio-icon-link.svg";
import iconMero from "../../img/portfolio-icon-mero.svg";
import portfolioPic01 from "../../img/portfolio-pic-01.jpg";
import arrowLeft from "../../img/arrow-left.svg";
import arrowRight from "../../img/arrow-right.svg";



const Portfolio = () => {
    return (

        <div className='portfolio'>
            <div className="title">
                <h2>Portfolio</h2>
            </div>

            <div className="cards-wrapper">
                <div className="card">
                    <div className="icons">
                        <img src={iconGithub} alt="Project Al Khat Alaraby GitHub" />
                        <img src={iconBehance} alt="Project Al Khat Alaraby Behance" />
                        <img src={iconMero} alt="Project Al Khat Alaraby Mero" />
                        <img src={iconLink} alt="Project Al Khat Alaraby link" />
                    </div>
                    <div className="pic">
                        <img src={portfolioPic01} alt="Project Al Khat Alaraby" />
                    </div>
                    <div className="text">
                        <h3>Al Khat Alaraby</h3>
                        <h4>Mobile App UX Research and Design</h4>
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

export default Portfolio
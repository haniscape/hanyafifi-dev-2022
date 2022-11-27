import React from 'react'
import './Portfolio.css'
import iconBehance from "../../img/portfolio-icon-behance.svg";
import iconGithub from "../../img/portfolio-icon-github.svg";
import iconLink from "../../img/portfolio-icon-link.svg";
import iconMero from "../../img/portfolio-icon-mero.svg";
import portfolioPic01 from "../../img/portfolio-pic-01.jpg";



const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className="container">
                <div className="title">
                    <h1>Portfolio</h1>
                </div>
                <div className="cards-wrapper">
                    <div className="card">
                        <div className="pic">
                            <img src={portfolioPic01} alt="Project Al Khat Alaraby" />
                        </div>
                        <div className="text">
                            <h2>Mobile App UX Research and Design</h2>
                            <h4>Al Khat Alaraby</h4>
                        </div>
                        <div className="icons">
                            <img src={iconGithub} alt="Project Al Khat Alaraby GitHub" />
                            <img src={iconBehance} alt="Project Al Khat Alaraby Behance" />
                            <img src={iconMero} alt="Project Al Khat Alaraby Mero" />
                            <img src={iconLink} alt="Project Al Khat Alaraby link" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Portfolio
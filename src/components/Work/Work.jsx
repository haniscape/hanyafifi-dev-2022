import React from 'react'
import './Work.css'
import workPaper from "../../img/work-paper.svg";
import uiPrototyping from "../../img/work-ui-prototyping.svg";

import arrowLeft from "../../img/arrow-left.svg";
import arrowRight from "../../img/arrow-right.svg";



const Work = () => {
    return (
        <div className='work'>
            <div className="title">
                <h2>Work</h2>
            </div>

            <div className="wrapper">
                <div className="work-text">
                    <h3 className="title">UI & Prototyping</h3>
                    <h5 className="subtitle">Low fidelity and high fidelity designs for Wireframes, Prototypes and Mockups</h5>
                    <span className="i-can">My tools are Figma, Adobe XD, miro and whimsical</span>
                </div>
                <div className="work-canvas" style={{
                    backgroundImage: `url(${workPaper})`
                }}>
                    <div className="stack-icons">
                        <img className="icon" src={uiPrototyping} alt="Project Al Khat Alaraby GitHub" />
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

export default Work
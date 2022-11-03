import React, { useRef, useEffect } from 'react';
import { tweenMax, Power3 } from 'gsap';

import './Hero.css';
import underlineA from "../../img/underline-a.svg";
import underlineB from "../../img/underline-b.svg";
import hero from "../../img/hero.svg";
import iconReact from "../../img/icon-react.svg";
import iconFigma from "../../img/icon-figma.svg";
import iconCss from "../../img/icon-css.svg";
/* import iconReactTxt from "../../img/icon-react-txt.svg";
import iconFigmaTxt from "../../img/icon-figma-txt.svg";
import iconCssTxt from "../../img/icon-css-txt.svg"; */





const Hero = () => {



    return (
        <div className="container">
            <div className='hero'>
                <div className='hero-text'>
                    <h1>

                        Hany Afifi
                    </h1>
                    <p>Lead<span>UI/UX</span>Developer</p>
                    <span>
                        Mission: create <span className='underline-a ' style={{ backgroundImage: `url(${underlineA})` }}>beautiful</span>  and <span className='underline-b ' style={{ backgroundImage: `url(${underlineB})` }}>user-friendly</span> web apps
                    </span>
                </div>
                <div className='canvas'>
                    <img src={hero} className="hero-pic" alt="Hany Afifi hero illustration" />

                    <div className='stack-icons'>
                        <img src={iconReact} className="icon react" alt="React" />
                        <img src={iconFigma} className="icon figma" alt="Figma" />
                        <img src={iconCss} className="icon css" alt="CSS" />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Hero
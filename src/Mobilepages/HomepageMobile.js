import Lottie from "react-lottie"
import Mobfooter from "./Mobilefooter";
import Navbar from "../Pages/Navbar"
import animationData from '../Assets/95348-coding-boy.json';
import Mobilecases from "./Mobilecasestudies";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
export default function Homepagemob(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

      const [showScrollToTop, setShowScrollToTop] = useState(false);
    
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setShowScrollToTop(scrollTop > 0);
      };
    
      const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <div>
        <Navbar/>
        <div className="left-side" style={{padding: '10px 10px 10px 10px'}}>
          <div className="text">
            Hi, I'm <span className="animated-text">John Mendez</span>
          </div>
          <div className="description">
            <p className="smalltext">
              I've immersed myself in a variety of projects, ranging from eCommerce and Machine
              Learning to Web Development. The tech sphere captivates me, and I eagerly embrace new
              technologies to keep my skills sharp. Let's create something remarkable together.
            </p>
          </div>
        </div>

        <div className="left-side">
        <Lottie options={defaultOptions} height={250} width={370} />
        </div>

        <div className="casestudies">SCROLL DOWN TO VIEW CASE STUDIES</div>
      <div className="image-container">
        <img
          src="https://static.thenounproject.com/png/582068-200.png"
          className="floating-image"
          style={{ height: '150px', marginBottom: '200px' }}
        />
      </div>
      <a id="caseStudiesmob">
      <Mobilecases/>
      </a>
      {showScrollToTop && (
        <div className="scroll-to-top" onClick={handleScrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}
        <Mobfooter/>
        </div>
    )
        

}
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../Css/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };


  const handleGo = () => {
    const isRootDomain = window.location.pathname === '/';
    const caseStudiesSection = document.getElementById('caseStudies');
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: 'smooth' });
    }
    navigate('/');
  };

  const handleGomob = () => {
    const isRootDomain = window.location.pathname === '/';
    const caseStudiesSection = document.getElementById('caseStudiesmob');
    console.log("aaaa" + caseStudiesSection)
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: 'smooth' });
    }
    navigate('/');
  };
  
  const handleContact = () => {
    const isRootDomain = window.location.pathname === '/';
    if (!isRootDomain) {
      navigate('/');
    }
    const caseStudiesSection = document.getElementById('contact');
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  
  };

  const handleContactmob = () => {
    const isRootDomain = window.location.pathname === '/';
    if (!isRootDomain) {
      navigate('/');
    }
    const caseStudiesSection = document.getElementById('contacts');
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  
  };
  return (
    <div>
      <div className="navbar">
        <div className="logo-container" onClick={() =>  navigate('/')}>
        &lt;JohnMendez/&gt;
        </div>
        <div className='options'>
        <div
            className="case"
            onClick={handleGo}
          >
            CASE STUDIES
          </div>
          <div className="projects" onClick={() => navigate('/projects')}>
            PROJECTS
          </div>
          <div className="contact" onClick={handleContact}>
            CONTACT
          </div>
        </div>
      
        <div className="hamburgericon" onClick={handleMenuClick}>
          <FontAwesomeIcon color="black" icon={faBars} height={'120px'} />
        </div>

      </div>
      <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
          <div
            className="case"
            onClick={handleGomob}
          >
            CASE STUDIES
          </div>
          <div className="projects" onClick={() => navigate('/projects')}>
          PROJECTS
          </div>
          <div className="contact" onClick={handleContactmob}>
          CONTACT
          </div>
        </div>
    </div>
  );
}

export default Navbar;

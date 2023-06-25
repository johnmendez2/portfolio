import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";
import { useNavigate } from 'react-router-dom';
import '../Css/johnsFS.css'; // Import CSS file for custom styling
import Mobilecompvis from '../Mobilepages/Mobilecompvis';
import Mobilejfs from '../Mobilepages/Mobilejfs';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function JohnsFS() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1400 // Set the default duration for all animations to 1000ms (1 second)
    });
  }, []);

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
  return (
    <div>
      <div className='mobile'>
        <Mobilejfs />
      </div>
      <div className='desktop'>
        <Navbar />

        <div className="view-more" onClick={() => navigate('/')}>
          View More Case Studies
        </div>
        <div className="headingtext">
          John's Football Shirts
        </div>

        <div className="image-container">
          <img className='image' style={{ borderRadius: '20px' }} src="https://johnsfootballshirts.com/static/media/cropped.3e836b6e6320a8549909.jpg" alt="Case Study" />
        </div>

        <div className="problem-space">
          <p>Football shirt collecting has been a passion of mine since 2018, so I thought, "Why not turn it into a business?" This led me to a personal goal of making the game more accessible to fans at affordable prices. In this case study for my portfolio website, I want to share the techniques I've learned and applied over the years to increase growth and reduce customer churn in my business.</p>
        </div>

        <div className="problem-space" data-aos="fade-up">
          <h2>Problem Space</h2>
          <p>When I first started, my website was a basic attempt at building an eCommerce platform. It didn't have many features, and honestly, it wasn't attracting many customers. It looked dull and uninspiring. That's when I realized I needed to create something more eye-catching and user-friendly, taking inspiration from my eCommerce course in university. So, I decided to give the website a complete makeover from scratch. </p>
        </div>

        <div className="imgleft">
          <div className="image-container">
            <img className="image" src="https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Design-PNG-HD-Quality.png" alt="Image" />
          </div>
          <div className="text-container" data-aos="fade-right">
            <h2>Challenge</h2>
            <p>One of the challenges I faced was ensuring secure payment options that comply with PCI DSS guidelines. I had already integrated a fully functional Stripe payment system, but I wanted to provide an extra layer of security for my customers. Along with that, I wanted to make the website more visually appealing with animations and interactive elements. Of course, I also needed to include all the essential features that an eCommerce store should have.</p>
          </div>
        </div>

        <div className="problem-space" data-aos="fade-up">
          <h2>Project Outline</h2>
          <p>To start off, I sketched the website layout using good old pen and paper. I wanted to make sure the design was top-notch and better than the average eCommerce store. Once I had the design in mind, I made a list of the features I wanted to incorporate. I also made sure to pay attention to SEO, using the right meta tags, descriptions, and tags for each page. And let's not forget about making the website more engaging with some cool animations.</p>
        </div>

        <div className="image-container">
          <img  style={{ borderRadius: '20px' }} src="https://firebasestorage.googleapis.com/v0/b/johnsfootballshirts.appspot.com/o/portfoliowebsitepictures%2FScreenshot%202023-06-20%20135250.png?alt=media&token=42148d9b-6883-45ee-9409-c831048df36e" alt="Case Study" />
        </div>

        <div className="problem-space" data-aos="fade-up">
          <h2>Solution</h2>
          <p>To bring my vision to life, I sought the help of my design-savvy friends. We brainstormed and came up with a fantastic design that you see today. The color scheme and fonts we chose add a touch of flair and liveliness to the website. As for the features, I implemented basic filtering options, easy navigation to important pages, and even a recommender system for mobile users. For SEO purposes, I made sure to include the appropriate meta tags, although it may take a bit of time for the changes to reflect in search rankings. Originally, I planned to use GIFs for animations, but then I discovered the wonders of Lottie JSON. It turned out to be a reliable and efficient solution for creating captivating animations. The entire development process, including the mobile version, took about a week and a half. And now, the website looks great and works perfectly across all devices.</p>
        </div>


        <div className="imgleft" style={{ marginBottom: '300px' }}>
          <div className="text-container" data-aos="fade-right">
            <h2>Conclusion</h2>
            <p>This website project has been a significant milestone in my web development journey. It has challenged me to find better ways of doing things and continuously improve. However, a website is never truly finished. I have exciting plans to add more features in the pipeline, including filters, blogs, competitions, and even a loyalty system. I'm currently working on bringing these ideas to life. The feedback from my customers has been fantastic, and they love the easy navigation and accessibility of the website. Stay tuned for more updates in the near future! You can check out the website <a class="purpletext" style={{cursor:'pointer'}} href="https://johnsfootballshirts.com/#/">here</a></p>
          </div>
          <div className="image-container">
            <img className="image" src="https://www.pngplay.com/wp-content/uploads/6/E-Commerce-Design-PNG-HD-Quality.png" alt="Image" />
          </div>
        </div>

        {showScrollToTop && (
          <div className="scroll-to-top" onClick={handleScrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        )}

        <Footer />
      </div>

    </div>
  );
}

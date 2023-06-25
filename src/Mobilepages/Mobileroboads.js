import Navbar from "../Pages/Navbar";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Mobfooter from "./Mobilefooter";
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Mobileroboads(){
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
  return(
      <div>
      <Navbar/>
      <div className="view-more" onClick={() => navigate('/')}>
      View More Case Studies
    </div>
    <div className="headingtext">
          RoboAds Booking System and Product pages
        </div>
    <div className="image-container">
    <img className='image' style={{ borderRadius: '20px' }} src="https://i.ytimg.com/vi/KBKFXYEJCB4/maxresdefault.jpg" alt="Case Study" />
    </div>

    <div className="problem-space">
    <p>RoboAds, a leader in autonomous advertising and digital signage robots, decided to focus on their robot rental model and sought a skilled Web Developer for the job. After considering several booking websites, our team agreed on creating a straightforward and user-friendly booking system integrated with Stripe as the payment platform.</p>
    </div>

    <div className="problem-space" data-aos="fade-up">
      <h2>Problem Space</h2>
      <p>Our goal was to design a simple yet elegant website for the booking system. It needed to have essential sorting and filtering features, along with a map section allowing clients to choose where they wanted to display their advertisements. There were two options for the business model: either advertise on already rented robots or rent a robot for events, exhibitions, or malls. </p>
    </div>

    <div className="image-container">
            <img className="image" style={{borderRadius: '80px'}} src="https://e0.pxfuel.com/wallpapers/358/714/desktop-wallpaper-stefan-iordache-your-desired-developer-to-make-your-perfect-responsive-website-web-programming.jpg" alt="Image" />
          </div>

      <div className="problem-space" data-aos="fade-up">
      <h2>Challenge</h2>
      <p>The entire website was developed using PHP and Laravel, so our main challenge was finding a seamless way to connect a React project with the Laravel framework. Once we achieved this, our focus shifted to developing the booking functions and integrating the payment gateway.</p>
    </div>

    <div className="problem-space" data-aos="fade-up">
      <h2>Project Outline</h2>
      <p>We started by visualizing the website using Canva. After multiple iterations, we finalized the design you see today. Next, we began working on the booking system itself. Once that was completed, our task was to seamlessly integrate the booking system into the Laravel project. Additionally, we connected the booking details page with the Stripe payment page, which was already set up using Laravel. After ensuring everything was in order, we utilized API calls to fetch information about available robots for specific dates.</p>
    </div>

    

    <div className="problem-space" data-aos="fade-up">
      <h2>Solution</h2>
      <p>Developing the booking system itself took about a week, but the most significant task was integrating the React project with Laravel. After several attempts, I discovered the simplest approach was to add the React files to the resources folder, create a blade file, and call the React file from there. We utilized webpack mix to ensure proper creation of the app.js files in the public folder, where the entire React project was stored. This method allowed us to easily add any React project to the website. As a result, the CEO and CTO decided to create a new page for their latest robot, OPAL. You can view the mockup of the page <a class="purpletext" style={{cursor:'pointer'}} href="https://roboadsproductpage.vercel.app/">here</a> and the actual page <a class="purpletext" style={{cursor:'pointer'}} href="https://roboads.com/product">here</a>. Implementing the APIs didn't take much time, but we did encounter some adjustments and fine-tuning with the booking system. In total, this project took approximately a month to complete.</p> 
    </div>

    <div className="problem-space" data-aos="fade-up">
      <h2>Conclusion</h2>
      <p>This experience provided valuable insights into the world of business and the challenges it entails. Working closely with the senior management helped me gain a deeper understanding of the intricacies of running a startup in Dubai. I also had the opportunity to learn from and collaborate with a fantastic team. The robots themselves were Android-based and capable of running WebApps, opening up possibilities for exciting future endeavors. Who knows what we might accomplish moving forward!</p>
     </div>
    
     {showScrollToTop && (
        <div className="scroll-to-top" onClick={handleScrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}
      <Mobfooter/>
      </div>
  )
}
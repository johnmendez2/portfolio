import '../Css/cases.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Mobilecases from '../Mobilepages/Mobilecasestudies';
export default function Cases(){
  const navigate = useNavigate();
    useEffect(() => {
        const caseStudyContainers = document.querySelectorAll('.case-study');
    
        function handleScroll() {
          const windowHeight = window.innerHeight;
    
          caseStudyContainers.forEach((container) => {
            const containerTop = container.getBoundingClientRect().top;
    
            if (containerTop < windowHeight * 0.8 && containerTop > -windowHeight * 0.2) {
              container.classList.add('animate');
            } else {
              container.classList.remove('animate');
            }
          });
        }
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the animation on initial load
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const handleClickJFS = () => {
        navigate("/JohnsFootballShirts");
        window.scrollTo(0, 0); // Scroll to the top of the page
      };

      const handleClickRoboads = () => {
        navigate("/RoboAds");
        window.scrollTo(0, 0); // Scroll to the top of the page
      };

      const handleClickCompvis = () => {
        navigate("/ComputerVision");
        window.scrollTo(0, 0); // Scroll to the top of the page
      };
    return(
        <div>
        <div className='desktop'>
        <div class="case-study" onClick={handleClickCompvis}>
  <div class="heading">Spontaneous Micro/Macro Expression Recognition -</div>
  <div class="heading"><span class="purpletext">Computer vision</span></div>
  <div class="image-container">
  <img src="https://uploads-ssl.webflow.com/6222354d59996011cd0c20de/623ca6e65f08d7526cee7af7_the_next_generation_of_computer_vision_technology.jpg" alt="Case Study Image" class="image"/>
</div> 
 <div class="details">
    <div class="leftside">
      <div class="type"><span class="purpletext">Type:</span>&nbsp; &nbsp;Computer vision / Machine Learning</div>
      <div class="role"><span class="purpletext">Role:</span> &nbsp; &nbsp;Researcher</div>
      <div class="date"><span class="purpletext">Date:</span> &nbsp; AUG ‘22 - APR ‘23</div>
    </div>
    <div class="rightside">
      <div class="desc">The human face can express a range of emotions, including subtle micro-expressions that convey important information like deception or excitement. To recognize these spontaneous changes, we propose a framework using VLDSP for feature extraction, Resnet50 for appearance information, and a 1-D Convolutional Neural Network for classification. Evaluating with CAS(ME)² dataset, our framework shows promise for broad applications in research and practical fields.<span class="purpletext" style={{cursor:'pointer'}}>&nbsp; Read more here!</span></div>
    </div>
  </div>
</div>


<div class="case-study" onClick={handleClickRoboads}>
  <div class="heading">RoboAds Booking System &
Product pages -</div>
  <div class="heading"><span class="purpletext">Web Development</span></div>
  <div class="image-container">
  <img src="https://i.ytimg.com/vi/KBKFXYEJCB4/maxresdefault.jpg" alt="Case Study Image" class="image"/>
</div> 
 <div class="details">
    <div class="leftside">
      <div class="type"><span class="purpletext">Type:</span>&nbsp; &nbsp;eCommerce / UI/ UX</div>
      <div class="role"><span class="purpletext">Role:</span> &nbsp; &nbsp;Web Developer</div>
      <div class="date"><span class="purpletext">Date:</span> &nbsp; APR ‘23 - JUN ‘23</div>
    </div>
    <div class="rightside">
      <div class="desc">
RoboAds, a leader in autonomous advertising and digital signage robots, decided to focus on their robot rental model and sought a skilled Web Developer for the job. After considering several booking websites, our team agreed on creating a straightforward and user-friendly booking system integrated with Stripe as the payment platform.<span class="purpletext" style={{cursor:'pointer'}}>&nbsp; Read more here!</span></div>
    </div>
  </div>
</div>



<div class="case-study" onClick={handleClickJFS}>
  <div class="heading">John's Football Shirts -</div>
  <div class="heading"><span class="purpletext">eCommerce</span></div>
  <div class="image-container">
  <img src="https://johnsfootballshirts.com/static/media/cropped.3e836b6e6320a8549909.jpg" alt="Case Study Image" class="image"/>
</div> 
 <div class="details">
    <div class="leftside">
      <div class="type"><span class="purpletext">Type:</span>&nbsp; &nbsp;eCommerce / Web Development</div>
      <div class="role"><span class="purpletext">Role:</span> &nbsp; &nbsp;Full-stack Developer</div>
      <div class="date"><span class="purpletext">Date:</span> &nbsp; DEC ‘21 - PRESENT</div>
    </div>
    <div class="rightside">
      <div class="desc">Football Shirt collecting has been one of my hobbies since 2018, so I decided why not make a business out of
buying and selling them? This led me to one of my life's goals, bring the game closer to the fans at an
affordable price.  The case study describes Sales, Procuremnt
and eCommerce techniques I've applied over the years to decrease customer churn and increase growth to scale
the business.<span class="purpletext" style={{cursor:'pointer'}}>&nbsp; Read more here!</span></div>
    </div>
  </div>
</div>

        </div>
          
        </div>
    )
}
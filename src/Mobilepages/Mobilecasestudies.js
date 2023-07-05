import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Mobilecases(){
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({
          duration: 1000 // Set the default duration for all animations to 1000ms (1 second)
        });
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
      const handleClickSupermarket = () => {
        navigate("/Supermarket");
        window.scrollTo(0, 0); // Scroll to the top of the page
      };

      const handleClickJewelry = () => {
        navigate("/Jewelrystore");
        window.scrollTo(0, 0); // Scroll to the top of the page
      };
      return(
        <div>

                    <div class="case-study" onClick={handleClickCompvis}  data-aos="fade-up">
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
    <div class="leftside">
    <div class="desc">The human face can express a range of emotions, including subtle micro-expressions that convey important information like deception or excitement. To recognize these spontaneous changes, we propose a framework using VLDSP for feature extraction, Resnet50 for appearance information, and a 1-D Convolutional Neural Network for classification. Evaluating with CAS(ME)² dataset, our framework shows promise for broad applications in research and practical fields.<span class="purpletext" style={{cursor:'pointer'}}>&nbsp; Read more here!</span></div>
    </div>
  </div>
</div>


<div class="case-study" onClick={handleClickJewelry}>
  <div class="heading">Jewellery store Exploratory Data Analysis & Prediction model -</div>
  <div class="heading"><span class="purpletext">Data Science</span></div>
  <div class="image-container">
  <img src="https://p.turbosquid.com/ts-thumb/ez/StwrNG/l8/1672665348483/png/1672666584/1920x1080/fit_q87/727559e16d3d5de1c6392a012adccca77d93a197/1672665348483.jpg" alt="Case Study Image" class="image"/>
</div> 
 <div class="details">
    <div class="leftside">
      <div class="type"><span class="purpletext">Type:</span>&nbsp; &nbsp;EDA/ Data Visualization/ Prediction Models</div>
      <div class="role"><span class="purpletext">Role:</span> &nbsp; &nbsp;Data Analyst</div>
      <div class="date"><span class="purpletext">Date:</span> &nbsp; JUN '23</div>
    </div>
    <div class="leftside">
      <div class="desc">
      In the realm of retail, understanding and predicting sales patterns is crucial for business success. In this case study, we explore the world of a jewelry store and its daily sales. Leveraging three years of historical data, we embark on an exploratory data analysis (EDA) journey to gain insights into the factors influencing sales trends and patterns. By delving into this dataset, we aim to uncover valuable information that will enable us to develop a predictive model for daily sales. This analysis will provide the jewelry store with actionable insights, empowering them to optimize inventory management, marketing strategies, and overall business operations. Through the combination of EDA and prediction, we strive to unlock the hidden potential within the data and drive growth for the jewelry store.<span class="purpletext" style={{cursor:'pointer'}}>&nbsp; Read more here!</span></div>
    </div>
  </div>
</div>


<div class="case-study" onClick={handleClickRoboads}  data-aos="fade-up">
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
    <div class="leftside">
    <div class="desc">
RoboAds, a leader in autonomous advertising and digital signage robots, decided to focus on their robot rental model and sought a skilled Web Developer for the job. After considering several booking websites, our team agreed on creating a straightforward and user-friendly booking system integrated with Stripe as the payment platform.<span class="purpletext" style={{cursor:'pointer'}}>&nbsp; Read more here!</span></div>
    </div>
  </div>
</div>



<div class="case-study" onClick={handleClickJFS}  data-aos="fade-up">
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
    <div class="leftside">
      <div class="desc">Football Shirt collecting has been one of my hobbies since 2018, so I decided why not make a business out of
buying and selling them? This led me to one of my life's goals, bring the game closer to the fans at an
affordable price.  The case study describes Sales, Procurement
and eCommerce techniques I've applied over the years to decrease customer churn and increase growth to scale
the business.<span class="purpletext" style={{cursor:'pointer'}}>&nbsp; Read more here!</span></div>
    </div>
  </div>
</div>


<div class="case-study" onClick={handleClickSupermarket}>
  <div class="heading">Supermarket Sales Exploratory Data Analysis -</div>
  <div class="heading"><span class="purpletext">Data Science</span></div>
  <div class="image-container">
  <img src="https://wallpaperaccess.com/full/1624848.jpg" alt="Case Study Image" class="image"/>
</div> 
 <div class="details">
    <div class="leftside">
      <div class="type"><span class="purpletext">Type:</span>&nbsp; &nbsp;EDA/ Data Mining/ Data Visualization</div>
      <div class="role"><span class="purpletext">Role:</span> &nbsp; &nbsp;Data Analyst</div>
      <div class="date"><span class="purpletext">Date:</span> &nbsp; JUN '23</div>
    </div>
    <div class="leftside">
      <div class="desc">
      In this comprehensive case study, we delve into the realm of supermarket sales data, aiming to identify and address the weak points that hinder performance. By conducting a meticulous analysis of the provided dataset, the focus is to uncover areas where the supermarket falls short and propose actionable strategies for improvement. Through a data-driven approach, this study offers valuable insights that can empower the researcher to drive impactful changes in operational processes and customer experience, ultimately leading to enhanced performance and growth.<span class="purpletext" style={{cursor:'pointer'}}>&nbsp; Read more here!</span></div>
    </div>
  </div>
</div>

        </div>
      )
}
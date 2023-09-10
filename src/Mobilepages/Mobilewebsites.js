import Navbar from "../Pages/Navbar";
import Mobfooter from "./Mobilefooter";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Mobilewebsites(){
  useEffect(() => {
    AOS.init({
      duration: 1400 // Set the default duration for all animations to 1000ms (1 second)
    });
  }, []);
    return(
        <div>
            <Navbar/>
            <div className="card-container" data-aos="fade-up">
          <div className="card">
            <img
              src="https://pear-orpin.vercel.app/static/media/front-view-hand-holding-smartphone.9e34070caac8e30ea10b.jpg"
              alt="Project Image 1"
            />
            <div className="card-content">
              <h2>Pear</h2>
              <p>
              Pear is a fictional tech brand that redefines the future of personal communication and computing. With a mission to seamlessly integrate cutting-edge technology into the daily lives of its users, Pear introduces a captivating lineup of devices that includes the revolutionary PearPhone and the versatile PearBook.
              </p>
              <a href="https://pear-orpin.vercel.app/" className="btn">
                View Website
              </a>
            </div>
          </div>
         
          <div className="card">
            <img
              src="https://pbs.twimg.com/media/DtGFrGqXcAAYcVq.jpg:large"
              alt="Project Image 1"
            />
            <div className="card-content">
              <h2>John's Football Shirts</h2>
              <p>
              John's Football Shirts is your go-to destination for an unparalleled collection of football jerseys and sports apparel. With a passion for the game and a commitment to delivering top-notch quality, It's not just a store; it's a haven for sports enthusiasts, collectors, and anyone who appreciates the beauty of football culture.              </p>
              <a href="https://www.johnsfootballshirts.com/" className="btn">
                View Website
              </a>
            </div>
          </div>

          <div className="card">
            <img
              src="data:image/jpeg;base64,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"
              alt="Project Image 1"
            />
            <div className="card-content">
              <h2>RoboAds</h2>
              <p>
              RoboAds Booking is your gateway to the future of advertising, where technology meets creativity, efficiency, and impact. The platform revolutionizes the way you book and deploy advertising robots, making it easier than ever to create memorable and attention-grabbing marketing campaigns.              </p>
              <a href="https://roboads.com/search-results/2023-09-10%2012:00:00/2023-09-10%2012:00:00/Dubai,%20United%20Arab%20Emirates/1?from=Sun,%2010%20Sep%202023%2012:00:00&to=Sun,%2010%20Sep%202023%2012:00:00&location=Dubai,%20United%20Arab%20Emirates&tenure=1%20days" className="btn">
                View Website
              </a>
            </div>
          </div>

        </div>
            <Mobfooter/>
        </div>
    )
}
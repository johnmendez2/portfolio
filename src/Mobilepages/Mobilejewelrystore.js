import Navbar from "../Pages/Navbar";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Mobfooter from "./Mobilefooter";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Mobilejewelry(){
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
      Jewellery store Exploratory Data Analysis & Prediction model
      </div>
      <div className="image-container">
        <img className='image' style={{borderRadius: '20px'}} src="https://p.turbosquid.com/ts-thumb/ez/StwrNG/l8/1672665348483/png/1672666584/1920x1080/fit_q87/727559e16d3d5de1c6392a012adccca77d93a197/1672665348483.jpg" alt="Case Study" />
      </div>

      <div className="problem-space">
      <p>In the realm of retail, understanding and predicting sales patterns is crucial for business success. In this case study, we explore the world of a jewelry store and its daily sales. Leveraging three years of historical data, we embark on an exploratory data analysis (EDA) journey to gain insights into the factors influencing sales trends and patterns. By delving into this dataset, we aim to uncover valuable information that will enable us to develop a predictive model for daily sales. This analysis will provide the jewelry store with actionable insights, empowering them to optimize inventory management, marketing strategies, and overall business operations. Through the combination of EDA and prediction, we strive to unlock the hidden potential within the data and drive growth for the jewelry store.</p>
      </div>

      <div className="problem-space" data-aos="fade-up">
        <h2>Problem Space</h2>
        <p>
The problem space for this case study revolves around performing a comprehensive analysis of a jewelry store's daily sales dataset spanning three years. The objective is to delve deep into the data and identify any underlying patterns, trends, and factors that influence sales performance. By exploring correlations between variables and examining the dataset thoroughly, we aim to uncover weaknesses or areas for improvement within the jewelry store's operations. This analysis will provide valuable insights to guide decision-making, optimize inventory management, enhance marketing strategies, and ultimately drive the store's daily sales growth and success. </p>
      </div>

      <div className="image-container">
          <img className="image" src="https://media.istockphoto.com/id/876835370/photo/business-success-with-growing-rising-charts-arrow-upward.jpg?s=612x612&w=0&k=20&c=EINeeLWurTlBTAPh73x7jqGYFcIzwWvnlVNyp7pGGTI=" alt="Image" />
        </div>

        <div className="problem-space" data-aos="fade-up">
        <h2>Challenge</h2>
        <p>The primary challenge in this case study is conducting a comprehensive examination of the jewelry store's three-year daily sales dataset to identify weaknesses and establish correlations between variables. Meticulous data cleaning ensures dataset quality and completeness, involving handling missing values, addressing inconsistencies, and ensuring data integrity. Selecting relevant variables requires careful consideration of sales dynamics, while accurately interpreting correlations necessitates statistical analysis and domain knowledge. Overcoming these challenges provides actionable recommendations for improving performance by addressing weaknesses, optimizing inventory management, and enhancing marketing strategies for long-term success.</p>
      </div>

      <div className="problem-space" data-aos="fade-up">
        <h2>Project Outline</h2>
        <h2>Data exploration</h2>
  <p> I will begin by exploring the dataset to understand its structure and contents. This involves examining the columns/variables available, their data types, and the overall size of the dataset. This initial exploration will provide me with a foundation of knowledge regarding the available information.
</p>

<div className="problem-space" data-aos="fade-up">
  <h2>Data cleaning</h2>
  <p>As the next step, I will clean the dataset by addressing missing values, outliers, and inconsistencies. Ensuring that the data is in the correct format and eliminating any duplicate entries is crucial for maintaining the quality and reliability of my analysis.</p>
</div>

<div className="problem-space" data-aos="fade-up">
  <h2>Descriptive statistics</h2>
  <p> I then calculate descriptive statistics, such as mean, median, standard deviation, and quartiles, for the numerical variables in the dataset. These statistics will provide a summary of the central tendencies, variability, and distribution of the sales data.</p>
 </div>

<div className="problem-space" data-aos="fade-up">
  <h2>Visualizations</h2>
  <p>To gain further insights, I will create visualizations like histograms, box plots, or line graphs. These visual representations will help me explore the distribution and patterns in the data, enabling me to identify trends, seasonality, and potential outliers or anomalies.</p>
</div>

<div className="problem-space" data-aos="fade-up">
  <h2>Market segmentation</h2>
  <p>I will explore ways to segment the dataset, such as by product category, customer demographics, or geographical location. Analyzing sales patterns within different segments will allow me to identify target markets and uncover opportunities for improvement.</p>
 </div>

<div className="problem-space" data-aos="fade-up">
  <h2>Correlation analysis</h2>
  <p> If there are numerical variables in the dataset, I will examine their correlation using techniques like Pearson's correlation coefficient. This analysis will help me identify relationships between variables, such as the correlation between price and sales volume.</p>
</div>    


<div className="problem-space" data-aos="fade-up">
  <h2>Time series analysis</h2>
  <p>
This dataset includes time-related information, so we have the opportunity to conduct time series analysis and extract valuable insights. By utilizing techniques such as moving averages, exponential smoothing, or ARIMA models, we can uncover trends, identify seasonality patterns, and forecast future sales. This analysis empowers us to make data-driven decisions, optimize sales strategies, and drive business growth by leveraging the temporal nature of the data.</p>
</div>

      </div>

      
      <div className="image-container">
          <img  className="image" style={{height:'400px'}} src="https://martech.org/wp-content/uploads/2014/12/big-data-analytics-ss-1920.jpg" alt="Case Study" />
        </div>

      <div className="problem-space" data-aos="fade-up">
      <h2>Solution</h2>
          <p>The analysis of the three-year daily sales dataset of the jewelry store involved using Python and standard data analysis libraries, including Pandas and NumPy. The initial exploratory data analysis (EDA) aimed to understand the dataset's structure and contents. Subsequently, data cleaning techniques were applied to handle missing values, outliers, and inconsistencies. Descriptive statistics were calculated to summarize the sales data, while visualizations like histograms and line graphs were created using Matplotlib to uncover patterns and identify outliers.
            </p>        
            <p>Furthermore, the dataset was segmented to identify target markets and potential areas for improvement. Correlation analysis, utilizing Pearson's correlation coefficient, was conducted to reveal relationships between variables, such as price and sales volume.            </p>
            <p>To predict future sales, a Long Short-Term Memory (LSTM) model was employed. The dataset was split into training and testing sets to evaluate the model's performance. The predictions were compared against the actual sales data, and the model's accuracy was assessed.            </p>
            <p>In addition to the quantitative analysis, visualizations were used to present the findings effectively. Graphs and charts were created to showcase trends, patterns, and the performance of the prediction model. The notebook can be viewed <a class="purpletext" style={{cursor:'pointer'}} href="https://github.com/johnmendez2/JewelrystoreEDAandPrediction/blob/main/jewelrystoreanalysis.ipynb">here</a>.         </p>
      </div>

      <div className="problem-space" data-aos="fade-up">
        <h2>Conclusion</h2>
        <p>Predicting daily sales based on the analysis of this dataset provides a good estimation of expected sales. However, it is important to acknowledge that the dataset may not fully capture certain factors that influence sales, such as holiday trends and high-income days. These random and external factors can significantly impact sales performance but are not adequately represented in the dataset.           </p>        
            <p>To improve the accuracy of the prediction model, incorporating real sales data that accounts for these additional factors would yield more reliable results. By incorporating such data, the prediction model could better capture the complexities and variations present in the actual sales patterns.            </p>
            <p>Nonetheless, despite the limitations of the dataset, the prediction model demonstrates promising performance. The predicted and actual numbers of total sales show remarkable similarity over the analyzed days. This suggests that the model is capturing the underlying patterns and trends within the available data, providing a useful tool for forecasting and decision-making.            </p>
            <p>In conclusion, while the current model may not capture all the nuances of sales dynamics, it still offers valuable insights and can be a helpful resource for estimating daily sales. Incorporating additional data and refining the model further would enhance its accuracy and robustness, enabling more precise predictions and facilitating effective sales planning and strategy implementation.         </p>
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
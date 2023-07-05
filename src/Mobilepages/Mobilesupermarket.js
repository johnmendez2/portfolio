import Navbar from "../Pages/Navbar";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Mobfooter from "./Mobilefooter";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Mobilesupermarket(){
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
      Supermarket Sales Exploratory Data Analysis
      </div>
      <div className="image-container">
        <img className='image' style={{borderRadius: '20px'}} src="https://wallpaperaccess.com/full/1624848.jpg" alt="Case Study" />
      </div>

      <div className="problem-space">
      <p>In this comprehensive case study, we delve into the realm of supermarket sales data, aiming to identify and address the weak points that hinder performance. By conducting a meticulous analysis of the provided dataset, the focus is to uncover areas where the supermarket falls short and propose actionable strategies for improvement. Through a data-driven approach, this study offers valuable insights that can empower the researcher to drive impactful changes in operational processes and customer experience, ultimately leading to enhanced performance and growth.</p>
      </div>

      <div className="problem-space" data-aos="fade-up">
        <h2>Problem Space</h2>
        <p>The problem space for this case study involves conducting an in-depth analysis of the three branches of the supermarket to identify weaknesses and explore correlations between different fields. By closely examining the provided dataset, the aim is to uncover any underlying shortcomings within each branch and determine if there are significant relationships among the variables. This analysis will provide valuable insights to guide decision-making and strategic planning, enabling the supermarket to address weaknesses, optimize operations, and improve overall performance across its branches. </p>
      </div>

      <div className="image-container">
      <img className="image" src="https://media.istockphoto.com/id/876835370/photo/business-success-with-growing-rising-charts-arrow-upward.jpg?s=612x612&w=0&k=20&c=EINeeLWurTlBTAPh73x7jqGYFcIzwWvnlVNyp7pGGTI=" alt="Image" />
        </div>

        <div className="problem-space" data-aos="fade-up">
        <h2>Challenge</h2>
        <p>The primary challenge in this case study lies in thoroughly examining the three branches of the supermarket to identify weaknesses and establish correlations between different fields. Ensuring the quality and completeness of the dataset is crucial, requiring meticulous data cleaning and addressing any missing values or inconsistencies. Selecting the most relevant variables to analyze is another hurdle, as it necessitates careful consideration to uncover meaningful insights. Additionally, accurately interpreting the correlations discovered is essential to avoid drawing erroneous conclusions. Overcoming these challenges will lead to actionable recommendations for improving the supermarket's performance.</p>
      </div>

      <div className="problem-space" data-aos="fade-up">
        <h2>Project Outline</h2>
        <div className="problem-space" data-aos="fade-up">
  <h2>Data exploration</h2>
  <p> I will begin by exploring the dataset to understand its structure and contents. This involves examining the columns/variables available, their data types, and the overall size of the dataset. This initial exploration will provide me with a foundation of knowledge regarding the available information.
</p>
</div>

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
  <h2>Hypothesis testing</h2>
  <p>To investigate the factors that may influence sales, I will formulate hypotheses and test them using appropriate statistical tests such as t-tests or ANOVA. This process will help me determine the significance of different factors on the supermarket's sales performance.</p>
</div>      </div>

      
      <div className="image-container">
          <img  className="image" style={{height:'400px'}}  src="https://martech.org/wp-content/uploads/2014/12/big-data-analytics-ss-1920.jpg" alt="Case Study" />
        </div>

      <div className="problem-space" data-aos="fade-up">
        <h2>Solution</h2>
        <p>The EDA was conducted using Python and standard data analysis libraries, including Pandas and NumPy. The dataset was explored to understand its structure and contents, followed by data cleaning to address missing values, outliers, and inconsistencies. Descriptive statistics were calculated to summarize the sales data, while visualizations, such as histograms and line graphs, were generated using Matplotlib to uncover patterns and outliers. Market segmentation was performed to identify target markets and opportunities for improvement. Correlation analysis using Pearson's correlation coefficient revealed relationships between variables, such as price and sales volume. By leveraging these techniques, valuable insights were gained to guide decision-making and improve supermarket performance and customer satisfaction. The notebook can be viewed <a class="purpletext" style={{cursor:'pointer'}} href="https://github.com/johnmendez2/supermarketEDA/blob/main/supermarketanalysis.ipynb">here</a>.
            </p>        </div>

      <div className="problem-space" data-aos="fade-up">
        <h2>Conclusion</h2>
        <p>The analysis performed on the dataset indicates a lack of variability and weak correlations between variables such as payment method, product line, quantity, and unit price with customer ratings. The minimal correlation coefficient of 0.037 suggests a limited linear relationship among these factors. Therefore, determining effective strategies to increase customer satisfaction requires additional research beyond the provided data. Further investigations should focus on specific customer feedback analysis, sales and product line performance, promotions or marketing campaigns, external factors, staffing or training issues, and competitor analysis. By exploring these areas, a more comprehensive understanding of customer satisfaction and actionable insights for improvement can be obtained.</p>
      </div>
      
      <div className="image-container" style={{marginBottom:'100px'}}>
        <img className='image' style={{borderRadius: '20px'}} src="https://static8.depositphotos.com/1404973/883/i/600/depositphotos_8838309-stock-photo-flowing-binary-code-in-the.jpg" alt="Case Study" />
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
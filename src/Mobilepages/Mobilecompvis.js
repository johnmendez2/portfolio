import Navbar from "../Pages/Navbar";
import Mobfooter from "./Mobilefooter";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Mobilecompvis(){
    const navigate = useNavigate();
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
      Spontaneous Micro & Macro Expression Recognition
      </div>
      <div className="image-container">
        <img className='image' style={{borderRadius: '20px'}} src="https://uploads-ssl.webflow.com/6222354d59996011cd0c20de/623ca6e65f08d7526cee7af7_the_next_generation_of_computer_vision_technology.jpg" alt="Case Study" />
      </div>

      <div className="problem-space">
      <p>The human face can express a range of emotions, including subtle micro-expressions that convey important information like deception or excitement. To recognize these spontaneous changes, we propose a framework using VLDSP for feature extraction, Resnet50 for appearance information, and a 1-D Convolutional Neural Network for classification. Evaluating with CAS(ME)² dataset, our framework shows promise for broad applications in research and practical fields.</p>
    </div>

      <div className="problem-space" data-aos="fade-up">
      <h2>Problem Space</h2>
      <p>Recognizing expressions poses a challenge due to the limited research conducted on micro-expressions compared to macro-expressions. Micro-expressions provide valuable insights into a person's true emotions within a brief timeframe. These rapid and often suppressed reactions offer a glimpse into the subject's feelings. Advancing research in this area will contribute to the development of highly accurate models capable of recognizing both spontaneous micro and macro-expressions.
 </p>    </div>

 <div className="image-container">
        <img style={{width:'350px'}} src="https://firebasestorage.googleapis.com/v0/b/johnsfootballshirts.appspot.com/o/portfoliowebsitepictures%2Fsampleframes.png?alt=media&token=624d1a85-5b36-4ce2-9752-86c9496aca09" alt="Image" />
      </div>

        <div className="problem-space" data-aos="fade-up">
        <h2>Challenge</h2>
        <p>The project faces several challenges, including the difficulty of achieving high accuracy on the CAS(ME)² dataset. Due to the dataset's nature of capturing fully real facial expressions in an uncontrolled environment, the highest accuracy achieved thus far is only 76%. The dataset comprises high-quality recordings of subtle facial movements, with a remarkable frame rate of 200 frames per second. The subjects in the dataset, consisting of 26 participants, were required to rewatch the videos to evaluate the quality of their own emotional expressions. Consequently, feature extraction from this dataset is time-consuming, demanding significant computational resources and meticulous analysis. Overcoming these challenges is crucial to enhancing the framework's accuracy and ensuring reliable recognition of spontaneous micro and macro expressions.
</p>      </div>

      <div className="problem-space" data-aos="fade-up">
        <h2>Project Outline</h2>
        <p>The goal of this project is to develop an end-to-end framework for recognizing spontaneous micro and macro expressions. The framework involves utilizing the VLDSP Algorithm for extracting dynamic features from the macro and micro expression dataset. Additionally, Resnet50 is used to capture appearance information from each frame. Classification is performed using a (1-D) CNN model. A significant milestone of this project is the utilization of the Chinese Academy of Sciences Macro-and Micro-expression (CAS(ME)²) database, the first dataset specifically designed for recognizing spontaneous macro and micro expressions. This dataset captures authentic and natural emotions, as the videos were recorded in real-life environments where individuals watched videos, allowing for a range of expressions including positive, negative, and various other emotions. The project aims to achieve accurate recognition of these diverse expressions.
</p>      </div>

      
<div className="image-container">
      <img className='image' style={{borderRadius: '20px'}} src="https://blogs.microsoft.com/wp-content/uploads/prod/sites/5/2020/03/facialrecognition.png" alt="Case Study" />
    </div>

      <div className="problem-space" data-aos="fade-up">
        <h2>Solution</h2>
        <div className="problem-space" data-aos="fade-up">
  <h2>Data Split</h2>
  <p>The (CAS(ME)<sup>2</sup>) dataset was split into 80% training data and 20% testing data. The training data was used to train our proposed algorithm while the testing data was used to evaluate the performance of the algorithm.</p>
</div>

<div className="problem-space" data-aos="fade-up">
  <h2>VLDSP Feature Extraction</h2>
  <p>For each video frame, our code reads in the three frames centered on that frame, converts them to grayscale, and applies the Kirsch masks to extract the VLDSP features. It then stores the VLDSP features in two separate arrays, VLDSP_positive and VLDSP_negative, depending on whether the feature is positive or negative. Finally, it applies a frame mask to the positive and negative VLDSP arrays to create a single VLDSP feature vector for that frame and concatenates the resulting feature vectors for each frame in the video into a final VLDSP feature vector for the video. This final VLDSP feature vector is then stored in a CSV file for each video.</p>
</div>

<div className="problem-space" data-aos="fade-up">
  <h2>Resnet50 Feature Extraction</h2>
  <p>For the Resnet50 component, we import necessary libraries like OpenCV, NumPy, Matplotlib, and Keras. We then initialize a Resnet50 model, pre-trained on the ImageNet dataset. Then we loop through the video frames and extract features from each frame using Resnet50. Each frame is resized to (224,224) and preprocessed to prepare it for the Resnet50 model.</p>
  <p>After processing all frames in a video, the code writes the extracted features to a CSV file. The loop continues for all videos. The resulting CSV file contains a row for each video, with columns representing the Resnet50 features extracted from each frame.</p>
</div>

<div className="problem-space" data-aos="fade-up">
  <h2>1D CNN Architecture</h2>
  <p>The final component of the model includes a 1D CNN with varying layers, building up to 6 in total. The first layer has 64 filters and a kernel size of 2, with an input shape of (1027, 1) for the summation trial and (1216, 1) for the concatenation trial representing the VLDSP and Resnet50 features. This is followed by a max pooling layer with a pool size of 2. The next five layers each have a different number of filters (64, 64, 128, 128, 256) and kernel size of 2, with activation functions of 'relu'. The fifth layer is followed by another max pooling layer with a pool size of 2. Finally, the output of the CNN is flattened and passed through two dense layers with 100 and 3 neurons respectively, with the last layer using a softmax activation function to output probabilities for the three possible classes.</p>
</div>

<div className="problem-space" data-aos="fade-up">
  <h2>Model Training</h2>
  <p>The model is compiled with 'sparse_categorical_crossentropy' loss function, 'adam' optimizer, and accuracy metric. The training data is split into 80% for training and 20% for validation using 'train_test_split' from sklearn. It is trained for 1000 epochs on the training data with a batch size of 32.</p>
  <p>We experimented with different sets of parameter values, focusing on the number of layers in the 1D CNN. The range of parameter values that gave the best results in our ablation study were narrowed down in subsequent rounds to find the optimum parameter values.</p>
</div>

<div className="problem-space" data-aos="fade-up">
  <h2>Evaluation Protocol</h2>
  <p>For the evaluation of the algorithm, we followed the evaluation protocol outlined in the original (CAS(ME)<sup>2</sup>) dataset study. Specifically, we used the cross-subject (CS) evaluation protocol, which involves training and testing the algorithm on different participants. This protocol ensures that the algorithm is robust to individual differences in micro and macro expression patterns.</p>
</div>
      </div>


      <div className="problem-space" data-aos="fade-up">
  <h2>Conclusion</h2>
  <p>
This case study explores recognizing spontaneous micro and macro expressions, important for applications like lie detection and mental health diagnosis. Our novel framework combines VLDSP algorithm and Resnet50 architecture to analyze facial features spatially and temporally. Evaluation on the (CAS(ME)<sup>2</sup>) dataset shows our framework achieves 71.014% accuracy in the second layer, surpassing VLBP (65.217%) and Resnet50 (63.768%). Our ablation study highlights the effectiveness of summing features for facial expression recognition, outperforming concatenation and individual feature use. We've submitted this paper to ICITA conference, aiming for my first academic publication. Feel free to contact me if you would like to read the paper.</p>
</div>
      
<div className="image-container">
        <img style={{width:'350px'}} src="https://firebasestorage.googleapis.com/v0/b/johnsfootballshirts.appspot.com/o/portfoliowebsitepictures%2Fcomparison.png?alt=media&token=8b6e15dd-7c6b-44cd-afd1-78e02a8dcc8f" alt="Image" />
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
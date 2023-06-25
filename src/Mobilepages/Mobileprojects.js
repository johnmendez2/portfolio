import Navbar from "../Pages/Navbar";
import Mobfooter from "./Mobilefooter";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Mobileprojects(){
  useEffect(() => {
    AOS.init({
      duration: 1400 // Set the default duration for all animations to 1000ms (1 second)
    });
  }, []);
    return(
        <div>
            <Navbar/>
            <div className="card-container"  data-aos="fade-up">
            <div className="card">
            <img
              src="https://i.pinimg.com/originals/4c/2a/e5/4c2ae5586a89a7a8c3fbfb6f59833f91.jpg"
              alt="Project Image 1"
            />
            <div className="card-content">
              <h2>Steganography</h2>
              <p>
                This project aims to implement a simple steganography technique using C and GIMP, where a text message
                is hidden within the red channel of an image. By manipulating the red component of each pixel, the text
                is encoded and concealed within the image.
              </p>
              <a href="https://github.com/johnmendez2/Steganography" className="btn">
                View Repository
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1557562645-4eee56b29bc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="Project Image 2"
            />
            <div className="card-content">
              <h2>Data Mining and Machine Learning Portfolio</h2>
              <p>
              Data Mining and Machine Learning portfolio on the US Accidents database 2018-2021.
              </p>
              <a href="https://github.com/johnmendez2/Jupyter-Portfolio" className="btn">
                View Repository
              </a>
            </div>
            
          </div>


          <div className="card">
            <img
              src="https://w0.peakpx.com/wallpaper/476/207/HD-wallpaper-tic-tac-toe-blue-cute-kawaii-minimal-minimalistic-tictactoe.jpg"
              alt="Project Image 2"
            />
            <div className="card-content">
              <h2>Tic-Tac-Toe Intelligent Agents</h2>
              <p>
              This Java program uses Value Iteration and Policy Iteration algorithms to create intelligent agents. They analyze the game board, evaluate moves, and make optimal decisions to ensure they never lose.
              </p>
              <a href="https://github.com/johnmendez2/TicTacToeAI" className="btn">
                View Repository
              </a>
            </div>
          </div>


          <div className="card">
            <img
              src="https://w.forfun.com/fetch/58/58fa78eb9c29d6da66eecaa21aa59d92.jpeg"
              alt="Project Image 2"
            />
            <div className="card-content">
              <h2>Fly Planner</h2>
              <p>
              Flight Travel Planner made on Java using Dijkstra's Algorithm and Graphs.
              </p>
              <a href="https://github.com/johnmendez2/FlyPlanner-Java" className="btn">
                View Repository
              </a>
            </div>
          </div>

          <div className="card">
            <img
              src="https://e0.pxfuel.com/wallpapers/279/706/desktop-wallpaper-bowling-alley-retro-bowling.jpg"
              alt="Project Image 2"
            />
            <div className="card-content">
              <h2>Ten Pin Manager</h2>
              <p>
              Program created on Java using Thread Safe Multithreading and Concurrency with Threads acting as players booking a Lane in a Bowling Alley.
              </p>
              <a href="https://github.com/johnmendez2/TenPinManager-Java" className="btn">
                View Repository
              </a>
            </div>
          </div>
          </div>
            <Mobfooter/>
        </div>
    )
}
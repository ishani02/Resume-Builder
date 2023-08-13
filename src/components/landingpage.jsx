import React from 'react';
import "./landingpage.css";
import {Link} from "react-router-dom";
const Landing = () => {
    return (
   <div className="landing">
       <div class="background">
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
      
      <div className="landing-intro">
             <h1>Create a resume that stands out</h1>
             <p>Create a Resume that perfectly describes your skills and match job profile</p>
             </div>
            <div className="start">
                
                <Link to="/templates" >
                  <button class="start-btn">Get Started for Free</button>
                  </Link>
              </div>
            <div className="landing-img">
                <img src="https://s3.amazonaws.com/resume.cdn/articles/posts/7396186_3.jpg" alt=""/>
            </div>
            </div>
            </div>
     );
}

export default Landing;
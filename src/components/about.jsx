import React from 'react';
import "./about.css";

const About = () =>{
    return(
        <div className="about-intro">
            <div className="intro-text">
            <h1>Do you have any comments or question? Our team will be happy to assist you. send us a message.</h1>
            <h2>support@resume.com</h2>
            <h3>We are here to answer any questions regarding our resume generator, do not hesitate
                to contact us for any reason. We will respond in less than 24 hours from receipt of email.
                Thanks for trusting us!!</h3>
            </div>
            <div className="about-img">
                <img src="https://149351874.v2.pressablecdn.com/wp-content/uploads/2020/05/career.jpg" alt=""/>
            </div>
        </div>
    )
}
export default About;
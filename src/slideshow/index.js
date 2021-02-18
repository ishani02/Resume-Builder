import React from 'react';
import { Slide } from 'react-slideshow-image';
import Skin1 from '../components/skins/skin1';
import skin1 from '../components/skins/skin1';
import Skin2 from '../components/skins/skin2';
import skin2 from "../components/skins/skin2";
import skin6 from "../components/skins/skin6";
import skin7 from "../components/skins/skin7";
import Skin5 from '../components/skins/skin5';
import skin5 from "../components/skins/skin5";
import './styles.css';
const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
  // Skin1,
  // Skin2,
  // Skin5 
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
        {/* <div style={{'backgroundImage': `url(${skin2})`}}> */}
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
        {/* <div style={{'backgroundImage': `url(${skin3})`}}> */}
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    )
}
export default Slideshow




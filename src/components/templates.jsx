import React, { Component } from 'react'
import { connect } from "react-redux";
import {skinCodes} from "../Constants/skinCodes";
import backgroundimage from '../static/images/resume-companies.jpg';
import "./templates.css";
import { updateSkin } from '../actions/documentActions';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Templates extends Component {
    state = { 
        skinCode : this.props.skinCode

     }

 handleSkinSelect =(skinCode)=>{
     this.props.changeSkinCode(skinCode);
     this.props.history.push("/contact");
}

componentDidMount(){
    console.log("inside mount" , this.props.skinCode);
  }

  componentWillReceiveProps(newProps){
    console.log(newProps);
    this.setState({
      skinCode : newProps.skinCode
    })
}

render() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //nextArrow: <SampleNextArrow />,
    //prevArrow: <SamplePrevArrow />
  };
        
  
  let {skinCode} = this.state;
        return (
          <React.Fragment>
           <div className="heading">
          <h1><b>DID YOU KNOW?</b></h1>
          <p>Your Resume is the bridge between you and your dream job.</p>
          <p className="p2">So,never underestimate the power of a good resume.</p>
        </div>
        <img src={backgroundimage} alt="" className="bgimgg" />
        
        <div className="section-2">
        <div className="section-2-heading"> 
         <h1><b>Don't Worry!! We've got you covered.</b></h1>
         <p>Create a perfect resume in 3 simple steps.</p>
        </div>
        <div class="features">
        {/* <div class="features-heading">
            <h2>AWESOME FEATURES</h2>
        </div> */}
        <div class="features-text">
          <div class="feature-1">
          <i class="fas fa-file-alt"></i>
              <h3><b>CHOOSE A TEMPLATE</b></h3>
              <p class="feature-para">
                Choose your favourite template from a wide variety of templates 
                given below. We have specially chosen some of the most popular and in demand
                templates, specially for you.
              </p>
          </div>
          <div class="feature-1">
          <i class="far fa-keyboard"></i>
            <h3><b>FILL IN THE BLANKS</b></h3>
            <p class="feature-para">
              Fill your details in the spaces given. All the necessary fields have been provided, you just have to fill your
              personal details. On the right side of the screen you can preview how it actually looks in the actual template.
            </p>
        </div>
        <div class="feature-1">
        <i class="fas fa-download"></i>
            <h3><b>DOWNLOAD</b></h3>
              <p class="feature-para">
                Once you have added all your details and changed the template(if needed) and
                you are happy with the final outcome,you can download your resume for free.Use your
                resume to apply for your dream job.
              </p>
        </div>
        </div>
    </div>
        </div>

         <div className="templates">

        <div className="templates-intro">
          <h1>Select a resume template to get started</h1>
          <p>You’ll be able to edit and change this template later!</p>
        </div>
        <div className="templates-styles">

        <Slider>
      {skinCodes.map(  ( skin ) => {
        let className = skin.value == skinCode ? "selected-skin"  : "";
        return (
          <div className="template-container">
        <div key = {skin.id} className={`template ${className}`} >
            <img src= {`/images/${skin.value}.svg`} alt="" />
           <button class="template-btn" onClick = { ()=> {this.handleSkinSelect(skin.value)} }>USE TEMPLATE</button>
          </div>
          </div>
        )
      })}
      </Slider>
      </div>
      
       </div>
       </React.Fragment>
         );
    }
}

const mapStateToProps = (state) => {
console.log("inside templates map state" , state);
    return {
      skinCode : state.document.skinCode
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return{
      // changeSkinCode : (skinCode) => {  dispatch( {type:"CHANGE_SKIN" , skinCode : skinCode} )}
      changeSkinCode : (skinCode) => {  dispatch( updateSkin(skinCode) )}
    }
  }
 
  export default connect(mapStateToProps , mapDispatchToProps )(Templates);
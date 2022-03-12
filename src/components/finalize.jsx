import React, { Component } from 'react';
import { connect } from 'react-redux';
import Preview from './preview';
import "./finalize.css";
import {skinCodes} from "../Constants/skinCodes";
import { updateSkin } from "../actions/documentActions";
import Pdf from "react-to-pdf"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class Finalize extends Component {
    state = { 
        contact: this.props.contact,
        education: this.props.education,
        skinCode: this.props.skinCode
     };

     handleSkinSelect = (skinCode) =>{
      //  console.log(skinCode);
      this.props.changeSkinCode(skinCode);
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
        // centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
       // nextArrow: <SampleNextArrow />,
        //prevArrow: <SamplePrevArrow />
      };
    
      let ref = React.createRef();
        let { contact, education, skinCode } = this.state;
    return (
      <div className="finalize">
        <div className="final-preview" ref={ref}>
          <Preview contact={contact} education={education}></Preview>
        </div>
        
        <div className="download-btn">
          <Pdf targetRef={ref} filename="MyResume.pdf" scale={1.}>
            {({ toPdf }) => (
              <button className="btn" onClick={toPdf}>DOWNLOAD <i class="fas fa-download"></i></button>
            )}
          </Pdf>
        </div>
        
        {/* <div className="final-templates">
     
         <Slider {...settings}>
        {skinCodes.map( (skin) =>{
            let className = skin.value == skinCode ? "selected-skin" : "";
            return <div key = {skin.id} className={`template ${className}`} >
            <img src= {`/images/${skin.value}.svg`} alt="" />
            <button class="template-btn use-template" onClick = { ()=> {this.handleSkinSelect(skin.value)} }>USE TEMPLATE</button>
          </div>
          })}
          </Slider>

          </div> */}

<div className="templates-final">
<Slider>
{skinCodes.map(  ( skin ) => {
let className = skin.value == skinCode ? "selected-skin"  : "";
return (
  <div className="template-container">
<div key = {skin.id} className={`template new ${className}`} >
    <img src= {`/images/${skin.value}.svg`} alt="" />
   <button class="template-btn" onClick = { ()=> {this.handleSkinSelect(skin.value)} }>USE TEMPLATE</button>
  </div>
  </div>
)
})}
</Slider>
</div>
        </div>
      
    );
  }
}
 
const mapStateToProps =(state)=>{
    return{
        contact: state.contactDetails,
        education: state.educationDetails,
        skinCode: state.document.skinCode
    };
};

const mapDispatchToProps = (dispatch) =>{
  return{
    changeSkinCode : (skinCode) => {  dispatch(updateSkin(skinCode) )}
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Finalize);//attaches store

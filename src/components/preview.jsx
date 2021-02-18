import React from 'react';
import { connect } from "react-redux";
import Skin1 from "./skins/skin1";
import Skin2 from "./skins/skin2";
import Skin5 from "./skins/skin5";
import Skin6  from "./skins/skin6";
import Skin7  from "./skins/skin7";



const Preview = (props) => {
   console.log("inside preview" , props);
   let skinCode = props.skinCode;
    
return (<React.Fragment>
{skinCode == "skin1" && <Skin1 contact={props.contact} education={props.education}></Skin1>}
{skinCode == "skin2" && <Skin2 contact={props.contact} education={props.education}></Skin2>}
{skinCode == "skin3" && <Skin5 contact={props.contact} education={props.education}></Skin5>}
{skinCode == "skin4" && <Skin6 contact={props.contact} education={props.education}></Skin6>}
{skinCode == "skin5" && <Skin6 contact={props.contact} education={props.education}></Skin6>}
{skinCode == "skin6" && <Skin6 contact={props.contact} education={props.education}></Skin6>}
{skinCode == "skin7" && <Skin7 contact={props.contact} education={props.education}></Skin7>}
{skinCode == "skin8" && <Skin6 contact={props.contact} education={props.education}></Skin6>}

</React.Fragment>
);
}

 
const mapStateToProps = (state) =>{
   console.log("inside map of preview" , state)
   return {
     skinCode : state.document.skinCode
   }
 }
 
 
 export default connect(mapStateToProps)(Preview);
 
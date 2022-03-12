import React from 'react';
import "./header.css";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../firebase/fbconfig';



const handleLogout = (logout) =>{
  auth.signOut().then(()=>{
    logout();
  })
    
}
//<img src="https://www.pepcoding.com/images/logo.png" alt=""/>
const Header = (props) => {
    let {auth} =props;
    return ( 
 <div className="header">
     <div className="header-logo">
         <Link to="/"><img src="https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-resume-icon-png-image_924881.jpg" alt=""/></Link>
     </div>
     <div className="header-links">
         {auth ?
                <ul>
                <li><Link to="/templates" ><b>Resume Templates</b></Link></li>
                <li><Link to="/about"><b>About Us</b></Link></li>
                <li><Link to="/" onClick={()=>{handleLogout(props.logout)}}><b>Logout</b></Link></li>
            </ul> :
            <ul>
            <li><Link to="/about"><b>About Us</b></Link></li>
            <li><Link to="/register"><button class="btn"><b>Register</b></button></Link></li>
            <li><Link to="/signin"><b>Sign In</b></Link></li>
        </ul>
            }

            </div>
       </div>
     );
}
 
const mapStateToProps=(state)=>{
    return{
        auth: state.auth.isAuth
    }
}
 

const mapDispatchToProps = (dispatch) =>{
    return{
        logout : () =>{ dispatch( {type:"LOGOUT"}  )}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Header); 

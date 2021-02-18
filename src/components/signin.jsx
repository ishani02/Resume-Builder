import React from 'react';
import "./signin.css";
import {connect} from "react-redux";
import { auth ,provider} from '../firebase/fbconfig';
import signinimg from '../static/images/signingif.gif';


const handleLogin=(login)=>{
  //sample data
  //sign in=> user data =>login=>

auth.signInWithPopup(provider).then( (user)=>{
    let {displayName, email} =user.user;
    let userDetails={
      displayName,
      email
    }
    login(userDetails);

  })
  .catch( (error)=>{
   console.log(error);
  })

};

const SignIn = (props) => {
    return (
      <div className="signin-pg">
     <div className="signin gradient-border">
       <div className="signin-text">
       <b>Enter Login Details</b>
       </div>
        <div className="signin-textarea">

  <label htmlFor =""><b>EMAIL</b></label>
    <input type="text" id="email" placeholder="Email"/>
 

    <label htmlFor =""><b>PASSWORD</b></label>
    <input type="password" id="pw" placeholder="Password"/>
</div>
        {/* <input type="submit" value="Login" /> */}
        <div className="buttons-login">
        <button class="login-btn" type="submit"><b>LOGIN</b></button>
        <button class="sign-in" onClick={()=>{handleLogin(props.login)}}> <b>Sign In With Google</b> </button>
        </div>
     </div>
     <div className="signin-img">
          <img src={signinimg} alt="" className="signin-image"/>
        </div>
        </div>
     );
    };


const mapStateToProps=(state)=>{
  console.log(state);
  // return{
  //   auth: state.auth.isAuth,
  // };

};

const mapDispatchToProps=(dispatch)=>{
  return{
  login : (userDetails) => {dispatch({type:"LOGIN" , userDetails : userDetails })}
}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
 

import React from 'react';
import "./register.css";
import registerimg from '../static/images/registernow.gif';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>


const Register = () => {
    return (  
         <div className="register-pg">
     <div className="register gradient-border">
    <div className="register-text">
    <b>Enter Your Details</b>
    </div>
     <div className="register-textarea">
<form>
<label>
<b>EMAIL</b>   
 <input type="text" name="email" placeholder="Email" />
</label>

<label>
 <b>PASSWORD</b>
 <input type="password" name="pw" placeholder="Password" />
</label>

<label>
<b>CONFIRM PASSWORD</b>
 <input type="text" name="pw-confirm" placeholder="Confirm Password"/>
</label>
</form>
</div>
     {/* <input type="submit" value="Login" /> */}
     <button class="register-btn" type="register"><b>Register</b></button>
     
  </div> 
  <div className="register-img">
          <img src={registerimg} alt="" className="register-image"/>
        </div>
  </div>
  );
}
 
export default Register;




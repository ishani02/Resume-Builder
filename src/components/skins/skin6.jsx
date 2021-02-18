import React from 'react';
import "./skin6.css";


const Skin6 = (props) => {
    let {
        fname,
        lname,
        phone,
        email,
        city,
        state,
        street,
        country,
        pin,
        profession,
        summary
    } = props.contact;


    let { cgpa, city: educationCity, state: educationState, degree, collegeName, graduationMonth, graduationYear } = props.education;


    return ( <React.Fragment>
        <div className="skin-header">
            <div className="name"><b>{fname} {lname}</b></div>
            {/* <div className="phone">{phone}</div> */}
               <div className="address">{phone}| {email}| {street}  {city}  {state} {country} {pin}  </div>
                    {/* <div className="email">{email}</div>
                    <div className="street">{street}</div>
                    <div className="city">{city}</div>
                    <div className="state">{state}</div>
                    <div className="country">{country}</div>
                    <div className="pin">{pin}</div>
                 </div> */}
             </div>

             <div className="professional-summary">
                 <div className="profession-summary-heading"><b>Professional Summary</b></div>
                 <div className="profession-description">
                 <div className="profession-details">{profession}</div>
                 <div className="profession-summary">{summary}</div>
           </div>
           </div>

           <div className="skills">
               <div className="skills-heading"><b>Skills</b></div>
               <div className="skills-description">
                   <div className="description">
                       <li>Javascript</li> <li>Node.js</li>
                   </div>
                   <div className="description">
                       <li>HTML</li> <li>CSS</li>
                   </div>
                   <div className="description">
                       <li>C++</li>  <li>Java</li>
                   </div>
               </div>
           </div>
    
    <div className="experience">
        <div className="experience-heading"><b>Experience</b></div>
        <div className="experience-description">
        <li><b>Shift Manager New Finland Company, Pasadnea,CA</b></li>
            <li>Provide onsite training,Monitored multiple databases to keep track of all company inventory</li>
            
        </div>
        <div className="experience-description">
            <li><b>Shift Manager New Finland Company, Pasadnea,CA</b></li>
            <li>Provide onsite training,Monitored multiple databases to keep track of all company inventory</li>
            </div>
         </div>

   <div className="Education">
       <div className="education-heading"><b>Education</b></div>
       <div className="education-description">
       <div className="degree"><b>{degree}</b>
           <li>{collegeName}</li>
           <li>{graduationMonth}</li>
           <li>{graduationYear}</li>
           <li>{educationCity}</li>
           <li>{educationState}</li>
           <li>{`CGPA: ${cgpa}`}</li>
       </div>
      </div>
   </div>
 </React.Fragment>
     );
}
 
export default Skin6;

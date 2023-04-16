import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Nav from "../../Components/Nav/Nav.jsx";


import './PatientProfile.css';
import pic1 from './patient.jpg';



export const PatientProfile = (props) => {


  return (
    <div>

      <div className='parent'>
        <Nav />
        
        <div className="profile-left">
          <article class="card">
            <div class="temporary_text">
              <img className="picture" alt="profile-photo" src={pic1} />
            </div>
            <div class="card_content">
              <h3 class="card_title">Mitali Dwivedi</h3>
              <span class="card_subtitle">.</span>

              <p className="up"> Age-20, Gender-Male</p>
              <p className="m"> Weight-50kg</p>
              <p className="m"> Height-5'6</p>
              <p className="down"> Blood Group-A+</p>

            </div>
          </article>


        </div>
        <button style={{right:"30%", top:"30%"}} class="cta">
  <span><Link to="/checkreports">CHECK REPORTS</Link></span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>

<button style={{right:"30%", top:"40%"}} class="cta">
  <span><Link to="/prescribedmedicine">PRESCRIBED MEDICINE</Link></span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
<button  style={{right:"30%", top:"50%"}}class="cta">
  <span><Link to="/ambulance">AMBULANCE</Link></span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
<button  style={{right:"30%", top:"60%"}} class="cta">
  <span><Link to="/findmydoctor">FIND MY DOCTOR</Link></span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>

    


      


      </div>

    </div>


  )
}


{/* <div class="card">
            <div class="blob"></div>
            <span class="img"><img className="picture" alt="profile-photo" src={pic1} /></span>
            <h2 className="abcd">Patient's Profile</h2> 
            <div className="texts">
              <p className="up"> Name-Prakash Uphadaya</p>
              <p className="m"> Age-20, Gender-Male</p>
              <p className="m"> Weight-50kg</p>
              <p className="m"> Height-5'6</p>
              <p className="down"> Blood Group-A+</p>
            </div>
          </div> */}

//           <div className="features">
        
//             <div className="features1"><Link to="/checkreports"><img className="pic2" alt="cliparts" src={pic2} /></Link></div>
//             <div className="features2" >  
//             <div id="container">
//   <button class="learn-more">
//     <span class="circle" aria-hidden="true">
//       <span class="icon arrow"></span>
//     </span>
//     <span class="button-text">Learn More</span>
//   </button>
// </div>   
//             </div>
//           </div>
         
//           <div className="features">
//             <div className="features1"><Link to="/medicine"><img className="pic4" alt="cliparts" src={pic4} /></Link></div>
//             <div className="features2"><Link to="/medicine">PRESCRIBED MEDICINE</Link></div>
//           </div>

//           <div className="features">
//             <div className="features3"><Link to="/ambulance"><img className="pic5" alt="cliparts" src={pic5} /></Link></div>
//             <div className="features2"><Link to="/ambulance">AMBULANCE</Link></div>
//           </div>

//           <div className="features">
//             <div className="features3"><img className="pic6" alt="cliparts" src={pic6} /></div>
//             <div className="features2"><Link to="/findmydoctor">FIND MY DOCTOR</Link></div>
//           </div>

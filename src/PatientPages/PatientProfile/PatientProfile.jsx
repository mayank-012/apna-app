import React, { useState } from "react";
import { Link } from 'react-router-dom';


import './PatientProfile.css';
import pic1 from './DSC_0056.jpg';
import pic2 from './checkreport.png';
import pic3 from './chatbot.png';
import pic4 from './recent medicine.png';
import pic5 from './sakhaola.png';
import pic6 from './find my doctor.png';


export const PatientProfile = (props) => {


  return (
    <div>
      <div class="card">
        <div class="blob"></div>
        <span class="img"></span>
        <h2>John<span>Doe</span></h2>
        <p>
         egadfgdfg
        </p>
      </div>


    </div>


  )
}


{/* <div className='parent'>

<div className="profile-left">
  <h2 className="abcd">Patient's Profile</h2> <hr></hr>
  <div className="texts">
    <img className="picture" alt="profile-photo" src={pic1} />
    <p className="up"> Name-Prakash Uphadaya</p>
    <p> Age-20, Gender-Male</p>
    <p> Weight-50kg</p>
    <p> Height-5'6</p>
    <p className="down"> Blood Group-A+</p>
  </div>

</div>

<div className="profile-right">

  <div className="features">
    <div className="features1"><Link to="/checkreports"><img className="pic2" alt="cliparts" src={pic2} /></Link></div>
    <div className="features2" ><Link to="/checkreports">CHECK REPORTS </Link></div>
  </div>

  <div className="features">
    <div className="features1"><Link to="/medicine"><img className="pic4" alt="cliparts" src={pic4} /></Link></div>
    <div className="features2"><Link to="/medicine">PRESCRIBED MEDICINE</Link></div>
  </div>

  <div className="features">
    <div className="features3"><Link to="/ambulance"><img className="pic5" alt="cliparts" src={pic5} /></Link></div>
    <div className="features2"><Link to="/ambulance">AMBULANCE</Link></div>
  </div>

  <div className="features">
    <div className="features3"><img className="pic6" alt="cliparts" src={pic6} /></div>
    <div className="features2"><Link to="/findmydoctor">FIND MY DOCTOR</Link></div>
  </div>

</div>


  <div className="chatbot">

<p className="chat">CHATBOT</p><df-messenger
    chat-title="HealthSakhaChatbot"
    agent-id="5e2e2c3a-07d2-48b9-a5e6-05097e030f28"
    language-code="en"
  ></df-messenger></div>


</div> */}

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Nav from "../../Components/Nav/Nav.jsx";


import './DoctorProfile.css';
import pic1 from './patient.jpg';



export const DoctorProfile = (props) => {


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
        <div className="dpr">
        <button style={{right:"30%", top:"30%"}} class="cta">
  <span><Link to="/newappointments">New Appointments</Link></span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>

<button style={{right:"30%", top:"40%"}} class="cta">
  <span><Link to="/uploadprescription">Upload Prescription</Link></span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
<br/>
<br/>
<br/>
<button  style={{right:"30%", top:"50%"}}class="cta">
  <span><Link to="/pastpatients">Past Patients</Link></span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
</div>


    


      


      </div>

    </div>


  )
}


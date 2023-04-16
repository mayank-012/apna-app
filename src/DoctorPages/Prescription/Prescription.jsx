import React from 'react'
import './Prescription.css';
import { Link } from 'react-router-dom';
import Nav from "../../Components/Nav/Nav.jsx";

const Prescription = () => {
  return (
    <div>

    <div className='parent'>
      <Nav />
      
      <div className="profile-left">
        
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
  <div className='profile-right'>

  <form action="/action_page.php">
  <label htmlFor="myfile">Select a file:</label>
  <input type="file" id="myfile" name="myfile" />
  <br />
  <br />
  <input type="submit" />
</form>
  </div>

    </div>

  </div>
  )
}

export default Prescription
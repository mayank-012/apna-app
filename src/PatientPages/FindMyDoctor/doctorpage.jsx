import React from "react";
import './doctorpage.css';
import Doctorcard from "./doctorcard";
import Nav from "../../Components/Nav/Nav.jsx";


export default function Doctorpage(props) {
  return (
    <div className='main'>

            <Nav/>

            <div className='left-div'>
                <div className="patient"><h4>Patient Profile</h4></div>
               
            </div>

            <div className="right-div">
                <div className="Report"><h4>Find my doctor</h4></div>

                <Doctorcard/>
                
                




            </div>








        </div>
  );
}

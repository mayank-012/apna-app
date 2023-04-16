import React from "react";
import './doctorpage.css';
import Doctorcard from "./doctorcard";
import Nav from "../../Components/Nav/Nav.jsx";

import doct from "./doctor.png"

export default function Doctorpage(props) {
  return (
    <div className='main'>

            <Nav/>

            <div className='left-div'>
            <button style={{ top: "13px", left: "10px" }} class="cta">
                    <span style={{ color: "black" }}>CHECK REPORTS</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>

                <button style={{ top: "73px", left: "10px" }} class="cta">
                    <span style={{ color: "black" }}>PRESCRIBED MEDICINE</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>

                <button style={{ top: "133px", left: "10px" }} class="cta">
                    <span style={{ color: "black" }}>AMBULANCE</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>

                <button style={{ top: "193px", left: "10px" }} class="cta">
                    <span style={{ color: "black" }}>FIND MY DOCTOR</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
                <img className="b-tech" src={doct} alt="doc" />
            </div>

            <div className="right-div">
                <div className="Report"><h4>Find my doctor</h4></div>

                <Doctorcard/>
                
                




            </div>








        </div>
  );
}

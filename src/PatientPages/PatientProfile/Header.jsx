import React from 'react';
import pic1 from '../../PatientPages/PatientProfile/patient.jpg';
import './Header.css';
// import pic2 from "../../Pages/CheckReports/art.png"

const Header = () => {
    return (
        <div className='main'>



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


            </div>


            <div className="right-div">
                <div className="Report"><h4>PATIENT PROFILE</h4></div>
                <div className="info">
                    
                    
                    <div className="details">
                    <div className="profile-right">
                        <article class="card">
                            <div class="temporary_text">
                                <img className="picture" alt="profile-photo" src={pic1} />
                            </div>
                            <div class="card_content">
                                <h3 class="card_title">Mitali Dwivedi</h3>
                                <span class="card_subtitle">.</span>

                                <p className="up"> Age-20</p>
                                <p className="m"> Gender-Female</p>
                                <p className="m"> Weight-50kg</p>
                                <p className="m"> Height-5'6</p>
                                <p className="m"> E-mail Id - loremipsum@ipsum.lo</p>

                                <p className="down"> Blood Group-A+</p>

                            </div>
                        </article>


                    </div>
                      
                    </div>

                </div>
                





            </div>







        </div>


    )
}

export default Header



{/* <div className="Report"><h4>Check Report</h4></div>
                <div className="tables">
                    <table>
                        <tr>
                            <th style={{width:"20%"}}>Name</th>
                            <th style={{width:"20%"}}>Date</th>
                            <th style={{width:"20%" }}>Reffered By</th>
                            <th style={{width:"20%" }}>Laboratory</th>


                        </tr>
                        <tr>
                            <td> <a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">X-Ray(Leg)</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. XYZ</td>
                            <td>Lab. ABC</td>


                        </tr>
                        <tr>
                        <td><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">Dengue</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. XYZ</td>
                            <td>Lab. ABC</td>



                        </tr>
                        <tr>
                        <td><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">Malaria</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. XYZ</td>
                            <td>Lab. ABC</td>



                        </tr>
                        
                    </table>
                </div> */}
import React from 'react';
import pic1 from '../../Pages/PatientProfile/DSC_0056.jpg';
import './Header.css';
import pic2 from "../../Pages/CheckReports/art.png"

const Header = () => {
    return (
        <div className='main'>



            <div className='left-div'>
                <div className="patient"><h4>Patient Profile</h4></div>
                <div className='patient-profile'>
                    <img className="picture" alt="profile-photo" src={pic1} />
                    <p className="up"> Name-Prakash Uphadaya</p>
                    <p> Age-20, Gender-Male</p>
                    <p> Weight-50kg</p>
                    <p> Height-5'6</p>
                    <p className="down"> Blood Group-A+</p>

                </div>
            </div>

            <div className="right-div">
                <div className="Report"><h4>Check Report</h4></div>
                <div className="tables">
                    <table>
                        <tr>
                            <th style={{width:"20%"}}>Name</th>
                            <th style={{width:"20%"}}>Date</th>
                            <th style={{width:"20%" }}>Reffered By</th>
                            <th style={{width:"20%" }}>Laboratory</th>


                        </tr>
                        <tr>
                            <td><img src={pic2} style={{margin:"5px"}} alt="art"></img><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">X-Ray(Leg)</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. XYZ</td>
                            <td>Lab. ABC</td>


                        </tr>
                        <tr>
                        <td><img src={pic2} style={{margin:"5px"}} alt="art"></img><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">Dengue</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. XYZ</td>
                            <td>Lab. ABC</td>



                        </tr>
                        <tr>
                        <td><img src={pic2} style={{margin:"5px"}} alt="art"></img><a href="https://drive.google.com/file/d/1f-wWCyGtpawV6pYccmsyBOrBqgb4uu7N/view?usp=sharing">Malaria</a></td>
                            <td>14/09/2023</td>
                            <td>Dr. XYZ</td>
                            <td>Lab. ABC</td>



                        </tr>
                        
                    </table>
                </div>




            </div>








        </div>


    )
}

export default Header
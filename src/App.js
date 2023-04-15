import HomePage from './PatientPages/HomePage/homepage';
import Design from './PatientPages/Ambulance/design';
import SignIn from './PatientPages/LoginPage/login';
import SignUp from './PatientPages/LoginPage/Signup';
import Doctorpage from './PatientPages/FindMyDoctor/doctorpage';
import Future from './future/future';


import {
  PatientProfile} from './PatientPages/PatientProfile/PatientProfile';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
       <Router>
        <switch>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/ambulance" element={<Design />} />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/patientprofile" element={<PatientProfile />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/findmydoctor" element={<Doctorpage />} />
          <Route exact path="/future" element={<Future />} />




          
        </Routes>

        </switch>
        
      </Router>
    </div>
  );
}

export default App;
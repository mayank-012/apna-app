import HomePage from './PatientPages/HomePage/homepage';
import Design from './PatientPages/Ambulance/design';
import SignIn from './PatientPages/LoginPage/login';

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


          
        </Routes>

        </switch>
        
      </Router>
    </div>
  );
}

export default App;
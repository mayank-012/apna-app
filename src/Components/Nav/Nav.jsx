import React from "react";
import './Nav.css';
// import { Link } from 'react-router-dom';

import picinfinte from "./Health.png";


export default function Nav(props) {
  return (

    <div className="navz" >
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/login">Patient</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Doctor</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/patientprofile">Profile</a></li>
                  <li><a className="dropdown-item" href="/ambulance">Amulance</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>

                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/login">Logout</a></li>
                </ul>
              </li>
              <div className="right"> 
              <img className="nav-img" src={picinfinte} alt="image" />

              </div>


            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>

  );
}
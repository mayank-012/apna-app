import React, { useState } from "react";
import './doctorlogin.css';
// import { Link } from 'react-router-dom';
// import Nav from '../../Components/Nav'
import Nav from "../../Components/Nav/Nav.jsx";
// import PropTypes from 'prop-types';
// import Footer from '../../Components/Footer'
// import { auth } from '../../firebase';
import { auth } from './firebase.jsx'
import pic1 from "./Untitled design (9).png"

import { signInWithEmailAndPassword } from 'firebase/auth';



const DSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                alert(error);
            });
    };

    return (
        <div className='sign-in-container'>
            <Nav />
        <img className="digh" src={pic1} alt=" "/>


            <div class="login-box">
                <p>LOGIN AS DOCTOR</p>
                <form onSubmit={signIn}>
                    <div class="user-box">
                        <input  type="email"
                        placeholder='enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  required="" name="" ></input>
                            <label>Email</label>
                    </div>
                    <div class="user-box">
                        <input type="password"
                        placeholder='enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}  required="" name="" ></input>
                            <label>Password</label>
                    </div>
                    
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                       <button type='submit'> <a><span></span>
      <span></span>
      <span></span>
      <span></span>Submit</a></button>
                  
                </form>
                <p>Don't have an account? <a href="/doctorsignup" class="a2">Sign up!</a></p>
            </div>







            {/* <div className='login'>
                <form onSubmit={signIn}>
                    <h1>WELCOME TO HEALTHसखा</h1>
                    <h2>Login</h2>
                    <label>E-mail</label>
                    <input
                        type="email"
                        placeholder='enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                <label>Password</label>
                    <input
                        type="password"
                        placeholder='enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    ></input>
                    <button type='submit'> Login</button>
                </form>
                <p><Link to="/signup">Don't have an account? Sign Up here.</Link></p>

            </div> */}


        </div>
    )
}

export default DSignIn








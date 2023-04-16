import React, { useState } from "react";
import './doctorlogin.css';

import Nav from "../../Components/Nav/Nav.jsx";

import { auth } from './firebase.jsx'
import pic1 from "./Untitled design (9).png"

import { createUserWithEmailAndPassword } from 'firebase/auth';

const DsignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
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
                <p>SIGN UP</p>
                <form onSubmit={signUp}>
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
                <p>Have an account? <a href="/login" class="a2">Login!</a></p>
            </div>


        </div>
    )
}

export default DsignUp








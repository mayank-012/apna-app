import React, {useEffect, useState} from 'react'
import { auth } from './firebase';
import HomePage from '../HomePage/homepage';
import { Navigate } from "react-router-dom";

import { DoctorProfile } from '../DoctorsProfile/DoctorProfile';

import { onAuthStateChanged, signOut } from 'firebase/auth';

const Auth = () => {

    const [authUser,setAuthUser] = useState(null);
    useEffect(() =>{
        const listen = onAuthStateChanged(auth,(user) =>{
            if (user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }

        });
        return () =>{
            listen();
        }
    },[])

    const UserSignOut = () => {
        signOut(auth).then(() => {
            alert("Sign out Successfully")
        }).catch(error => alert("Sign out Failure"));
    }
  return (

    <div>{authUser ?<> <p><DoctorProfile/></p> </>:<p><HomePage/></p>}</div>
  );
}

export default Auth
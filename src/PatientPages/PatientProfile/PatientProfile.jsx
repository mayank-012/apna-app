import React from 'react'
import Nav from "../../Components/Nav/Nav.jsx";


import Header from './Header'

export const PatientProfile =() =>{

    return (
            <div>
            <Nav title="HEALTHसखा" />
            <Header/>
            <df-messenger
    intent="WELCOME"
    chat-icon="https://i.ibb.co/SJY6sdP/H.png"
    chat-title="Healthसखा-Chatbot"
    agent-id="c0a89bfd-770b-4ba3-8c4d-4a52e7ccd836"
    language-code="en"
></df-messenger>

                
            </div>
        )
}
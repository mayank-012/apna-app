import PIC1 from './Health.png'
import PIC2 from './Human Resources System.png'
import './homepage.css'

import Nav from "../../Components/Nav/Nav.jsx";



export default function HomePage(props){
    return(
        <div>
            <Nav />

            <img className="img-1" src={PIC1} alt="first-image" />
            <div className="div-1"><a href="/login">PATIENT LOGIN</a></div>
            <div className="div-2">DOCTORS LOGIN</div>
            <div className="div-3"><a href="/future">LAB LOGIN</a></div>
            <div className="div-4"><a href="/future">AMBULANCE LOGIN</a></div>
            <img className="img-2" src={PIC2} alt="second-image"/>
        </div>
    )
}
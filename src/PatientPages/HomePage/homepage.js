import PIC1 from './Health.png'
import PIC2 from './Human Resources System.png'
import './homepage.css'




export default function HomePage(props){
    return(
        <div>
           
            <img className="img-1" src={PIC1} alt="first-image" />
            <div className="div-1"><a href="/login">PATIENT LOGIN</a></div>
            <div className="div-2">DOCTORS LOGIN</div>
            <div className="div-3">LAB LOGIN</div>
            <div className="div-4">AMBULANCE LOGIN</div>
            <img className="img-2" src={PIC2} alt="second-image"/>
        </div>
    )
}
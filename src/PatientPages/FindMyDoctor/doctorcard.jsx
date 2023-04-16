import React from 'react';
import './doctorcard.css'
import pic1 from "./medical-team.png"
function Doctorcard() {

  const myFunction=()=> {
    return(
       alert("Your Appointment has been requested.")
       )
  }
  return (
    <>
    <div className="card1" style={{position:"absolute",left:"30px",top:"100px"}}>
  <div className="card-details1">
    <img style={{height: "80px", left:"50%"}} src={pic1}/>
    <p className="text-title1">Dr Nehru</p>
    <p className="text-body1">Cardiologist IGIMS</p>
  </div>
  <button className="card-button1" onClick={myFunction}>Connect</button>
</div>

    <div className="card1" style={{position:"absolute",left:"250px",top:"100px"}}>

  <div className="card-details1">
  <img style={{height: "80px", left:"50%"}} src={pic1}/>

<p className="text-title1">Dr Nehru</p>
    <p className="text-body1">Cardiologist IGIMS</p>
  </div>
  <button className="card-button1" onClick={myFunction}>Connect</button>
</div>

    <div className="card1" style={{position:"absolute",left:"470px",top:"100px"}}>

  <div className="card-details1">
  <img style={{height: "80px", left:"50%"}} src={pic1}/>

<p className="text-title1">Dr Nehru</p>
    <p className="text-body1">Cardiologist IGIMS</p>
  </div>
  <button className="card-button1" onClick={myFunction}>Connect</button>
</div>

    <div className="card1" style={{position:"absolute",left:"690px",top:"100px"}}>

  <div className="card-details1">
<img style={{height: "80px", left:"50%"}} src={pic1}/>

<p className="text-title1">Dr Nehru</p>

    <p className="text-body1">Cardiologist IGIMS</p>
  </div>
  <button className="card-button1" onClick={myFunction}>Connect</button>
</div>

    <div className="card1" style={{position:"absolute", left:"910px",top:"100px"}}>

  <div className="card-details1">
<img style={{height: "80px", left:"50%"}} src={pic1}/>

<p className="text-title1">Dr Nehru</p>

    <p className="text-body1">Cardiologist IGIMS</p>
  </div>
  <button className="card-button1" onClick={myFunction}>Connect</button>
</div>

<div className="card1" style={{position:"absolute",left:"30px",top:"384px"}}>
  <div className="card-details1">
<img style={{height: "80px", left:"50%"}} src={pic1}/>

<p className="text-title1">Dr Nehru</p>

    <p className="text-body1">Cardiologist IGIMS</p>
  </div>
  <button className="card-button1" onClick={myFunction}>Connect</button>
</div>

    <div className="card1" style={{position:"absolute",left:"250px",top:"384px"}}>

  <div className="card-details1">
<img style={{height: "80px", left:"50%"}} src={pic1}/>

<p className="text-title1">Dr Nehru</p>

    <p className="text-body1">Cardiologist IGIMS</p>
  </div>
  <button className="card-button1" onClick={myFunction}>Connect</button>
</div>

    <div className="card1" style={{position:"absolute",left:"470px",top:"384px"}}>

  <div className="card-details1">
<img style={{height: "80px", left:"50%"}} src={pic1}/>

<p className="text-title1">Dr Nehru</p>

    <p className="text-body1">Cardiologist IGIMS</p>
  </div>
  <button className="card-button1" onClick={myFunction}>Connect</button>
</div>

    <div className="card1" style={{position:"absolute",left:"690px",top:"384px"}}>

  <div className="card-details1">
<img style={{height: "80px", left:"50%"}} src={pic1}/>

<p className="text-title1">Dr Nehru</p>

    <p className="text-body1">Cardiologist IGIMS</p>
  </div>
  <button className="card-button1" onClick={myFunction}>Connect</button>
</div>

    <div className="card1" style={{position:"absolute", left:"910px",top:"384px"}}>

  <div className="card-details1">
<img style={{height: "80px", left:"50%"}} src={pic1}/>

<p className="text-title1">Dr Nehru</p>

    <p className="text-body1">Cardiologist IGIMS</p>
  </div>
  <button className="card-button1" onClick={myFunction}>Connect</button>
</div>
</>
    
  );
}

export default Doctorcard;

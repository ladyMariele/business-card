import React from "react"
import ReactDOM from "react-dom"

export default function Info() {
    return (
        <div>
            <img className="profile-pic" src="./images/profile-pic.png" />
            
            <div className="component-container">
                <h1>Lady Mariele Poliquit</h1>
                <p className="subtitle">Frontend Developer</p>
                
                <div className="button-container"> 
                    <button className="email-btn" onClick={() => window.location.href='mailto:poliquitmariele@email.com'}>
                    <img src="./images/Mail.png" /> Email
                    </button>
                    
                    <button className="linkedin-btn" onClick={() => window.location.href='https://www.linkedin.com/in/marielepoliquit/'}>
                    <img src="./images/linkedin.png" /> LinkedIn
                    </button>
                </div>
                
            </div>
        </div>
    )
}
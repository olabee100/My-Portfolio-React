import React from 'react';
import './Navbar.css' ;

const navbar = () => {
  return (
    <div className = 'heading'>
      

       <div className= "LOGO"><h2>AOS</h2></div>
       
       <ul>
            <li className="current"><a href ="/"> Home </a></li>
            <li><a href = "https://drive.google.com/file/d/1ADB1N84eyd3f13bOn--1TrxNeFeTXdkF/view?usp=share_link"> Get Resume</a></li>
            <li><a href = "/Contact">Contact</a></li>
            
            
        </ul>
        
      
        
        
    </div>
    
  )
}

export default navbar


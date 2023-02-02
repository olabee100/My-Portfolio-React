import React from 'react'
import logo from '../../src/olabayo antonio.JPG'
import './Hero.css'
import Social from './Social'

const Hero = () => {
  return (
    <div className = "hero-container">
        <div className = "hero-left"> 
        
        <img src={logo} width="300px" height="300px"  alt = 'olabayo' className = "myImage"/>
        
         </div>
        <div className = "hero-right" >
                <h1>ANTONIO OLABAYO SOLOMON</h1>
                
                    <h3>I AM A FRONT-END WEB DEVELOPER</h3>
                    <h3>Creativity!!! Integrity!!! Reliability!!!</h3>
                    
                <div className = "portfolioLink">
                <a href="/Contact">
                  <button className = "btn first-btn">Hire me</button>
                </a>
                <a href="https://drive.google.com/file/d/1ADB1N84eyd3f13bOn--1TrxNeFeTXdkF/view?usp=share_link">
                  <button className = "btn first-btn">Get resume</button>
                </a>
                </div>
                <Social />
        </div>
        
        </div>
  )
}

export default Hero


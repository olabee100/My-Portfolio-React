import React from 'react'
import logo from '../../src/olabayo antonio.JPG'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className ="Testimonial-all">
      <div className = "testimonial-header">
          <h1>Testimonies & Recommendations</h1>
      </div>
      <div className = "testimonial-body">
          <div className="test-boxes">
            <div className="test-boxes1">
              <div>
              <img src={logo} width="100px" height="100px"  alt = 'olabayo' className = "myImage"/>
              <h2>Antonio Olabayo</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima porro quas.</p>
              </div>
              <div>
              <img src={logo} width="100px" height="100px"  alt = 'olabayo' className = "myImage"/>
              <h2>Antonio Olabayo</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima porro quas.</p>
              </div>
              </div>
              <div className="test-boxes2">
              <div>
              <img src={logo} width="100px" height="100px"  alt = 'olabayo' className = "myImage"/>
              <h2>Antonio Olabayo</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima porro quas.</p>
              </div>
              <div>
              <img src={logo} width="100px" height="100px"  alt = 'olabayo' className = "myImage"/>
              <h2>Antonio Olabayo</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima porro quas.</p>
              </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Testimonial

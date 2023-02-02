import React from 'react'

import Navbar from '../COMPONENTS/Navbar'
import Hero from '../COMPONENTS/Hero'
import About from '../COMPONENTS/About'
import Contact from '../COMPONENTS/Contact'
import Education from '../COMPONENTS/Education'
import Experiences from '../COMPONENTS/Experiences'
import Footer from '../COMPONENTS/Footer'
import Projects from '../COMPONENTS/Projects'
import Services from '../COMPONENTS/Services'
import Testimonial from '../COMPONENTS/Testimonial'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Services />
      <Experiences />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage

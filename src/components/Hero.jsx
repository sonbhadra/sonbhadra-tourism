import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return <section id="hero" className="d-flex align-items-center">
    <div className="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
      <h1>Your New Online Presence with Bethany</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <Link to="#about" className="btn-get-started scrollto">Get Started</Link>
    </div>
  </section>
}

export default Hero
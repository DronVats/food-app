import React from 'react'
import aboutimage from '../images/about.png'
export default function About() {
  return (
    <div id='about'>
        <div className="about-text">
            <h1>UPCOMING EVENTS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illo, perferendis possimus nesciunt numquam saepe.</p>
            <button>Read More</button>
        </div>
        <div className="about-image">
            <img src={aboutimage} alt="" />
        </div>
    </div>
  )
}

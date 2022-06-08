import React from 'react'
import Productbox from './Productbox'
import pimage1 from '../images/s1.png'
import pimage2 from '../images/s2.png'
export default function Products() {
  return (
    <div id='products'>
        <h1>Choose & Enjoy</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, neque.</p>
        <div className="a-container">
            <Productbox image={pimage1} title='Luger Burger'/>
            <Productbox image={pimage2} title='Le Pigeon Burger'/>
            <Productbox image={pimage1} title='Luger Burger'/>
        </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <div id='main'>
        <div className="header-heading">
            <h3>It's Great time for a Good taste of Burger</h3>
            <h1><span>Burger</span> FOR<br/>Week</h1>
            <p className="details">Lorem ipsum dolor sit amet.</p>
            <div className="header-btns">
                <Link to="#" className='header-btn'>Order</Link>
            </div>
        
        </div>
    </div>
  )
}

import React from 'react'
import logo from "./img/logo.png"
import "./Navbar.css"

export default function Navbar() {
  return (
    <>
    <div className="nav-container">
        <div className="nav-left">
            <img src={logo} alt=""/>
        </div>
        <div className="nav-right">
            <ul className='d-flex'>
              <li>
                <a href='#resume'>resume</a>
              </li>
              <li>
                <a href='#portfolio'>portfolio</a>
              </li>
             
              <li>
                <a href='#contact'>contact</a>
              </li>
            </ul>

        </div>
        
    </div>
    </>
  )
}

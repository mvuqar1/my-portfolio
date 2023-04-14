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
              <a >resume</a>
              </li>
              <li>
                <a a onClick={() => window.scroll(0, 493)}>portfolio</a>
              </li>
             
              <li>
                <a onClick={() => window.scroll(0, 800)}>contact</a>
              </li>
            </ul>

        </div>
        
    </div>
    </>
  )
}

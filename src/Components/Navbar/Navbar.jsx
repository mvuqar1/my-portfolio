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
              <p>resume</p>
              </li>
              <li>
                <p onClick={() => window.scroll(0, 493)}>portfolio</p>
              </li>
             
              <li>
                <p onClick={() => window.scroll(0, 800)}>contact</p>
              </li>
            </ul>

        </div>
        
    </div>
    </>
  )
}

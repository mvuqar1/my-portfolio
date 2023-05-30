import React from 'react'
import logo from "./img/logo.png"
import "./Navbar.css"

export default function Navbar() {
  window.onscroll=()=>{
    let navbar = document.querySelector(".nav-container");
    navbar.classList.toggle("toggle-scroll",window.scrollY>100)
}
  

  return (
    <>
    <div className="nav-container">
        <div className="nav-left">
            <img src={logo} alt=""/>
        </div>
        <div className="nav-right">
            <ul className='d-flex'>
              <li>
              <p onClick={() => document.getElementById("about").scrollIntoView()}>resume</p>
              </li>
              <li>
                <p onClick={() => document.getElementById("portfolio").scrollIntoView()}>portfolio</p>
              </li>
             
              <li>
                <p onClick={() => document.getElementById("contacts").scrollIntoView()}>contact</p>
              </li>
            </ul>

        </div>
        
    </div>
    </>
  )
}

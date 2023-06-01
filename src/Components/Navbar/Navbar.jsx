import React, { useState, useEffect } from 'react';
import logo from "./img/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
  
    const aboutSection = document.getElementById("about");
    const portfolioSection = document.getElementById("portfolio");
    const contactsSection = document.getElementById("contacts");
  
    const aboutOffset = aboutSection.getBoundingClientRect().top + window.scrollY - 4 * 16;
    const portfolioOffset = portfolioSection.getBoundingClientRect().top + window.scrollY - 1 * 16;
    const contactsOffset = contactsSection.getBoundingClientRect().top + window.scrollY - 44 * 16;
  
    if (scrollPosition >= aboutOffset && scrollPosition < portfolioOffset) {
      setActiveLink("about");
    } else if (scrollPosition >= portfolioOffset && scrollPosition < contactsOffset) {
      setActiveLink("portfolio");
    } else if (scrollPosition >= contactsOffset) {
      setActiveLink("contacts");
    } else {
      setActiveLink("");
    }
  };
  const handleNavLinkClick = (id) => {
    document.getElementById(id).scrollIntoView();
    setActiveLink(id);
  }

  return (
    <>
      <div className={`nav-container ${activeLink ? 'toggle-scroll' : ''}`}>
        <div className="nav-left">
          <img src={logo} alt="" />
        </div>
        <div className="nav-right">
          <ul className='d-flex'>
            <li>
              <p
                className={activeLink === "about" ? "active" : ""}
                onClick={() => handleNavLinkClick("about")}
              >
                resume
              </p>
            </li>
            <li>
              <p
                className={activeLink === "portfolio" ? "active" : ""}
                onClick={() => handleNavLinkClick("portfolio")}
              >
                portfolio
              </p>
            </li>
            <li>
              <p
                className={activeLink === "contacts" ? "active" : ""}
                onClick={() => handleNavLinkClick("contacts")}
              >
                contact
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

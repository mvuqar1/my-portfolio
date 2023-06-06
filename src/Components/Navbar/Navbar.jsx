import React, { useState, useEffect } from 'react';
import logo from "./img/logo.png";
import close from "./img/close.png"
import menu from "./img/menu.png"
import "./Navbar.css";


export default function Navbar() {
  const [activeToggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const[menuBar,SetMenuBar]=useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const aboutSection = document.getElementById("about");
    const skillsSection = document.getElementById("skills");
    const portfolioSection = document.getElementById("portfolio");
    const contactsSection = document.getElementById("contacts");

    const aboutOffset = aboutSection.getBoundingClientRect().top + window.scrollY - 4 * 16;
    const skillsOffset = skillsSection.getBoundingClientRect().top + window.scrollY - 5 * 16;
    const portfolioOffset = portfolioSection.getBoundingClientRect().top + window.scrollY - 5 * 16;
    const contactsOffset = contactsSection.getBoundingClientRect().top + window.scrollY - 44 * 16;

    if (scrollPosition === 0) {
      setToggle(false);
    } else if (scrollPosition >= aboutOffset && scrollPosition < skillsOffset) {
      setActiveLink("about");
      setToggle(true)
    } else if (scrollPosition >= skillsOffset && scrollPosition < portfolioOffset) {
      setActiveLink("skills");
      setToggle(true)
    } else if (scrollPosition >= portfolioOffset && scrollPosition < contactsOffset) {
      setActiveLink("portfolio");
      setToggle(true)
    } else if (scrollPosition >= contactsOffset) {
      setActiveLink("contacts");
      setToggle(true)
    } else {
      setActiveLink();
    }
  };

  const handleNavLinkClick = (id) => {
    if (id === "skills") {
      const targetElement = document.getElementById(id);
      const offset = targetElement.offsetTop - 4 * 16;

      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    } else if (id === "portfolio") {
      const targetElement = document.getElementById(id);
      const offset = targetElement.offsetTop - 4 * 16;

      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    } else {
      document.getElementById(id).scrollIntoView();
    }

    setActiveLink(id);
  }

  return (
    <>
      <div className={`nav-container ${activeToggle ? 'toggle-scroll' : ''}`}>
        <div className="nav-left">
          <img src={logo} alt="" />
        </div>
        <div className="nav-right">
          <div className="nav-list" style={{ right: menuBar ? '0' : '-100%' }}>
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
                  className={activeLink === "skills" ? "active" : ""}
                  onClick={() => handleNavLinkClick("skills")}
                >
                  skills
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
            <div className="nav-close"><img src={close} alt="close" onClick={() => SetMenuBar(!menuBar)} />
            </div>
            </div>
            <div className="nav-menu"><img src={menu} alt="menu" onClick={() => SetMenuBar(!menuBar)} /></div>
        </div>
      </div>
    </>
  )
}

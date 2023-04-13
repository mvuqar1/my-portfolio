import React from 'react'
import me from "./img/me.png"
import "./About.css"

export default function About() {
    return (
        <div className="about-container">
            <div className="about-left">
                <img src={me} alt='Vuqar' />
            </div>
            <div className="about-right">
                <div className="about-right-items">
                    <div className="about-item me">
                        <h1><span>A</span>bout me</h1>
                    </div>
                    <div className="about-item front">
                        <h3>Junior Front-end Developer</h3>
                    </div>
                    <div className="about-item resume">
                        <p>Hello, my name is Vugar, and I am a frontend developer with experience in HTML, CSS, JavaScript, React, Redux, Node.js, Express, and MySQL. I constantly strive to develop my skills to stay up-to-date with the latest trends and technologies in web development.
                            I specialize in creating beautiful and user-friendly web applications and enjoy working on both individual and team projects. My goal is always to provide high-quality work that exceeds expectations.
                            In my free time, I watch web development video tutorials to improve my skills and knowledge.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
// import me from "./img/me.png"
import me2 from "./img/me111.png"
import "./About.css"
import{motion} from "framer-motion"

const textAnimation={
    hidden:{
        x:-100,
        opacity:0
    },
    visible:custom=>({
        x:0,
        opacity:1,
        transition:{delay:custom * 0.2},
        // transition:{duration:custom*0.2}

    })
}

export default function About() {
    return (
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{amount:0.1}}
        id='about' 
        className="about-container">
            <div className="about-left">
                <motion.img variants={textAnimation} custom="3" src={me2} alt='Vuqar' />
            </div>
            <div className="about-right">
                <div className="about-right-items">
                    <div className="about-item me">
                        <motion.h1 variants={textAnimation} custom="1"><span>A</span>bout me</motion.h1>
                    </div>
                    <div className="about-item front">
                        <motion.h3 variants={textAnimation} custom="2">Junior Front-end Developer</motion.h3>
                    </div>
                    <div className="about-item resume">
                        <motion.p variants={textAnimation} custom="3">Hello, my name is Vugar, and I am a frontend developer with experience in HTML, CSS, JavaScript, React, Redux, Node.js, Express, and MySQL. I constantly strive to develop my skills to stay up-to-date with the latest trends and technologies in web development.
                            I specialize in creating beautiful and user-friendly web applications and enjoy working on both individual and team projects. My goal is always to provide high-quality work that exceeds expectations.
                            In my free time, I watch web development video tutorials to improve my skills and knowledge.</motion.p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

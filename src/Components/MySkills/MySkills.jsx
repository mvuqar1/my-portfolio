import React from 'react'
import Slider from '../Slider/Slider'
import "./MySkills.css"
import { motion } from "framer-motion"

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.5 }

  })
}


export default function MySkils() {
  return (
    <>
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.1 }}
    id='skills' 
    className='container-my-skills'>

    <motion.h1 variants={textAnimation} custom={1}>My Skills</motion.h1>
    <Slider/>
    </motion.div>
    </>
  )
}

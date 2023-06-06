import React, { useState } from 'react'
import SliderItem from './SliderItem'
import imgData from '../../assets/imgData'
import "./Slider.css"
import left from "../../assets/img/left.png"
import right from "../../assets/img/right.png"

import { motion } from "framer-motion"

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 }

  }
}

export default function Slider() {

  const [slide, SetSlide] = useState(0)
  const len = imgData.length

  const leftButton = () => {
    if (slide === 0) {
      SetSlide(-(len - 1) * 100)
    } else {
      SetSlide(prev => prev + 100)
    }
  }
  const rightButton = () => {
    if (slide === -(len - 1) * 100) {
      SetSlide(0)
    } else {
      SetSlide(prev => prev - 100)
    }

  }
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.1 }}
    className='slider-container'>
      <motion.button variants={textAnimation} custom={1} onClick={(e) => leftButton()}><img src={left} alt="left" /></motion.button>
      <motion.div variants={textAnimation} custom={2} images={imgData} slide={slide}>
  <SliderItem images={imgData} slide={slide} />
</motion.div>
      <motion.button variants={textAnimation} custom={1} onClick={(e) => rightButton()}><img src={right} alt="right" /></motion.button>

    </motion.div>
  )
}

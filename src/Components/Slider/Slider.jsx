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
      <button variants={textAnimation} custom={2} onClick={(e) => leftButton()}><img src={left} alt="left" /></button>
      <SliderItem variants={textAnimation} custom={1} images={imgData} slide={slide} />
      <button variants={textAnimation} custom={2} onClick={(e) => rightButton()}><img src={right} alt="right" /></button>

    </motion.div>
  )
}

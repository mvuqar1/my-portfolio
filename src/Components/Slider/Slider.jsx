import React, { useState, useEffect } from 'react';
import SliderItem from './SliderItem';
import imgData from '../../assets/imgData';
import "./Slider.css";
import left from "../../assets/img/left.png";
import right from "../../assets/img/right.png";

import { motion } from "framer-motion";

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

export default function Slider() {
  const [slide, setSlide] = useState(0);
  const len = imgData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (slide === -(len - 1) * 100) {
        setSlide(0);
      } else {
        setSlide(prev => prev - 100);
      }
    }, 3000); // Интервал в миллисекундах (здесь установлено 3 секунды)

    return () => clearInterval(interval);
  }, [slide, len]);

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      className='slider-container'>
      <motion.button variants={textAnimation} custom={1}><img src={left} alt="left" /></motion.button>
      <motion.div variants={textAnimation} custom={3} images={imgData} slide={slide}>
        <SliderItem images={imgData} slide={slide} />
      </motion.div>
      <motion.button variants={textAnimation} custom={1}><img src={right} alt="right" /></motion.button>
    </motion.div>
  );
}

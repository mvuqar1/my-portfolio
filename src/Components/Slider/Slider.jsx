import React, { useState } from 'react'
import SliderItem from './SliderItem'
import imgData from '../../assets/imgData'
import "./Slider.css"
import left from "../../assets/img/left.png"
import right from "../../assets/img/right.png"

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
    <div className='slider-container'>
      <button onClick={(e) => leftButton()}><img src={left} alt="left" /></button>
      <SliderItem images={imgData} slide={slide} />
      <button onClick={(e) => rightButton()}><img src={right} alt="right" /></button>

    </div>
  )
}

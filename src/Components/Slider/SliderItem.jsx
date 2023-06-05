import React from 'react'
import "./SliderItem.css"

export default function SliderItem({images ,slide }) {
  return (
    <div className='slider-item-line'>
        {images.map((image, index)=>(
            <div className='slider-item-item' style={{left:`${slide}%`}}  key={index}>
                <img src={image.urls} alt={image.title} />
            </div>
        ))}
    </div>
  )
}

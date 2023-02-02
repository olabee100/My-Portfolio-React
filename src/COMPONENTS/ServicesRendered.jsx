import React from 'react'
import './ServicesRendered.css'

const ServicesRendered = ({bimage, bigtext,  smalltext}) => {
  return (
    <div className = 'renderSize'>
        <img src = {bimage} alt= 'mine' />
        <h3 className = 'sizecolor'>{bigtext}</h3>
        <p className = 'sizecolor'>{smalltext}</p>
    </div>
  )
}

export default ServicesRendered

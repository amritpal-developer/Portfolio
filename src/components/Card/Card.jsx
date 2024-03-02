import React from 'react'
import './Card.css'
export const Card = ({emoji,heading,detail}) => {
  return (
  <div className="card">
    <img src={emoji} alt="error" />
    <span>{heading}</span>
    <span>{detail}</span>
    <button className="c-button">LEARN MORE</button>
  </div>
  )
}

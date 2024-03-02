import React from 'react'
import './Floating.css'
export default function Floating({content}) {
  return (
   <div className="floatingDiv">
    <img src={content?.image} alt="error" />
   <span>
    {content?.text1}
    <br />
    {content?.text2}
   </span>
   </div>
  )
}

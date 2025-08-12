// import {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Suites from "./Suites"
import { useState } from 'react'
const images =[
  "/spatubs.jpeg",
  "/spacomp.jpeg",
  "/spachair.jpg"
]
const Select = () => {
  const [current, setcurrent] = useState(0)
  const nextimg = ()=>{
    setcurrent((prev)=>(prev + 1) % images.length)
  }
  const previmg = ()=>{
    setcurrent((prev)=>(prev - 1 + images.length) % images.length)
  }
  return (
    <>
    <h2 className="title">Book Now</h2>
    <div className='image-slider'>
      <i onClick={previmg} class="fa-solid fa-angle-left"></i>
      <img onClick={nextimg} style={{width:"100%" , height:"70vh" , backgroundSize:"over"}} src={images[current]} alt="" />
      <i onClick={nextimg} class="fa-solid fa-angle-right"></i>
      {/* <i onClick={nextimg} class="fa-solid fa-greater-than"></i> */}
    </div>
    <Suites />
    </>
  )
}

export default Select

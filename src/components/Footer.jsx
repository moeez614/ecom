import React from 'react'
import "./Nav.css"
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='jj'>
        <h2>Inspired Hospitility</h2>
        <i class="fa-solid fa-arrow-right" style={{ fontSize: "30px", backgroundColor: "orange", borderRadius: "50%", padding: "10px", color: "black", transform: "rotate(315deg)", aspectRatio: "1/1", display: "flex", justifyContent: "center", alignItems: "center" }}></i>
      </div>
      <hr style={{ marginTop: "30px" }} />
      <div className='jjj'>
        <div>
          <h2>Quick link</h2>
          <NavLink><h4>Privacy Policy</h4></NavLink>
          <NavLink><h4>Terms & Conditions</h4></NavLink>
          <NavLink><h4>Cancellation Policy</h4></NavLink>
        </div>
        <div>
          <h2>Contact</h2>
          <NavLink to={"https://wa.me/923474236282"} target='_blank'><h4><i class="fa-brands fa-whatsapp"></i>Whatsapp</h4></NavLink>
          <NavLink to={"mailto:moeez7697@gmail.com"} target='_blank'><h4><i class="fa-solid fa-envelope"></i>Email</h4></NavLink>
          <NavLink to={"https://www.google.com/maps/place/Gojra,+Pakistan/@31.1463223,72.640416,9851m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3923001515646a23:0xfcb2866ffe58b367!8m2!3d31.1504688!4d72.6811507!16zL20vMDh5ajI1?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D"} target='_blank'><h4><i class="fa-solid fa-location-dot"></i>United state of Gojra</h4></NavLink>
        </div>
        <div>
          <h2>Social media link</h2>
          <NavLink to={"https://www.instagram.com/moeezian_webwork/"} target='_blank'><h4><i class="fa-brands fa-instagram"></i>Instagram</h4></NavLink>
          <NavLink to={"https://github.com/moeez614/"} target='_blank'><h4><i class="fa-brands fa-github"></i>Github</h4></NavLink>
          <NavLink to={"https://www.youtube.com/channel/UCVIlEL2yAiOO8nxW8IX3stw"} target='_blank'><h4><i class="fa-brands fa-youtube"></i>Youtube</h4></NavLink>
        </div>
      </div>
      <div className='dd'>
        <h5>&copy; 2025 <span><a href="https://www.instagram.com/moeezian_webwork/" target='_blank'>Powered by Moeezian webwork</a></span></h5>
        <div>
          <NavLink><h4>Privacy Policy    </h4></NavLink>.
          <NavLink><h4>Terms & Conditions </h4></NavLink>.
          <NavLink><h4>Cancellation Policy</h4></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer

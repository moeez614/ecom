import React from 'react'
import "./Nav.css"
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Nav = () => {
    const [bar, setbar] = useState(true)

    return (
        <>
            <div className='navigation'>
                <nav>
                    <NavLink to={"/"}>
                        <img src="/Untitled design (1).png" alt="logo" style={{ width: "100px" }} />
                    </NavLink>
                    <ul>
                        <NavLink to={"/home"}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to={"/suites"}>
                            <li>Suites</li>
                        </NavLink>
                        <NavLink to={"/dining"}>
                            <li>Dining</li>
                        </NavLink>
                        <NavLink to={"/amenities"}>
                            <li>Amenities</li>
                        </NavLink>
                    </ul>
                    <section>
                        <NavLink to={"/booknow"}>
                            <li>Book now</li>
                        </NavLink>
                        <NavLink to={"/profile"}>
                            <i class="fa-solid fa-user"></i>
                        </NavLink>
                        {bar ? <i class="fa-solid fa-bars" onClick={() => setbar(false)}></i> : <i class="fa-solid fa-xmark" onClick={() => setbar(true)}></i>}
                        {/* <i class="fa-solid fa-bars"></i> */}
                    </section>
                </nav>

            </div>
            {/* ................................... */}
            {!bar && <motion.div
                initial={{
                    opacity: 0.4
                }}
                whileInView={{
                    opacity: 0.8
                }}

                transition={{
                    duration: 0.3
                }}
                className='displayflexo'>
                <NavLink to={"/home"}
                onClick={()=>setbar(true)}
                >
                    <li>Home</li>
                </NavLink>
                <NavLink to={"/suites"}
                onClick={()=>setbar(true)}
                >
                    <li>Suites</li>
                </NavLink>
                <NavLink to={"/dining"}
                onClick={()=>setbar(true)}
                >
                    <li>Dining</li>
                </NavLink>
                <NavLink to={"/amenities"}
                onClick={()=>setbar(true)}
                >
                    <li>Amenities</li>
                </NavLink>

                {/* <NavLink className={'logo-in-bar'}> */}
                    <img className='logo-in-bar' src="/Untitled design (1).png" alt="logo" />
                {/* </NavLink> */}
                <div className="social-nav" style={{ display: "flex", position: "absolute", bottom: "20px" }}>
                    <NavLink to={"https://www.instagram.com/moeezian_webwork/"} target='_blank'><h4><i class="fa-brands fa-instagram"></i></h4></NavLink>
                    <NavLink to={"https://github.com/moeez614/"} target='_blank'><h4><i class="fa-brands fa-github"></i></h4></NavLink>
                    <NavLink to={"https://www.youtube.com/channel/UCVIlEL2yAiOO8nxW8IX3stw"} target='_blank'><h4><i class="fa-brands fa-youtube"></i></h4></NavLink>
                </div>
            </motion.div>}

        </>
    )
}

export default Nav

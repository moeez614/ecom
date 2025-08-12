import React from 'react'
import { motion } from "framer-motion"
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import "./Nav.css"

const Frame = () => {
    return (
        <>
            <div className='frame'>
                <Outlet />
                <div className='frames'>
                    <h1>Welcome to <br />
                        eCOM</h1>
                    <h4>your home away from home</h4>
                    <div className='search'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="search" />
                    </div>
                </div>
            </div>
            <section className='parallax'>
                <h2>Explore our <br />
                    signature rooms</h2>

                <div className='parallaximg'>
                    <div>
                        <motion.img
                            initial={{ x: -100 }}
                            viewport={{
                                once: true,
                                amount: 0.3
                            }}
                            whileInView={{ x: 0 }}
                            whileHover={{
                                scale: 1.03,
                            }}
                            transition={{ duration: 1 }}
                            src="/dining.jpeg" alt="Dining in hotels" />
                        <h3 style={{ textAlign: "center" }}>Dining</h3>
                    </div>

                    <div>
                        <motion.img
                            initial={{ x: 100 }}
                            viewport={{
                                once: true,
                                amount: 0.3
                            }}
                            whileHover={{
                                scale: 1.03,
                            }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1 }}
                            src="/Hotel-suite-living-room.jpg" alt="" />
                        <h3 style={{ textAlign: "center" }}>Living rooms</h3>
                        <motion.img
                            initial={{ x: 100 }}
                            viewport={{
                                once: true,
                                amount: 0.3
                            }}
                            whileHover={{
                                scale: 1.03,
                            }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1 }}
                            src="ameneties.avif" alt="" />
                        <h3 style={{ textAlign: "center" }}>Amenities</h3>
                    </div>
                </div>

            </section>

            {/* 
            // 
            // 
            //  */}
            <div className="expectation">
                <h2 style={{ padding: "20px" }}>
                    Fine Dining & <br />
                    expectational Amenities
                </h2>
                <div className='displayflex'>
                    <div>
                        <div className='brackets'>
                            <NavLink to={"/lounge"}>
                                <motion.div
                                    initial={{
                                        y: -30,
                                        opacity: 0.4
                                    }}
                                    whileInView={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.3
                                    }}
                                    whileHover={{
                                        backgroundColor: "#bdbdbd",
                                    }}
                                    transition={{ duration: 1 }}
                                    className='bracket'>
                                    <h3>Lounge</h3>
                                    <h5>Breakfast | Lunch | Dinner</h5>
                                </motion.div>
                            </NavLink>
                            <NavLink to={"spa"}>

                                <motion.div
                                    initial={{
                                        y: -30,
                                        opacity: 0.4
                                    }}
                                    whileInView={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.3
                                    }}
                                    whileHover={{
                                        backgroundColor: "#bdbdbd",
                                    }}
                                    transition={{ duration: 1 }}
                                    className='bracket'>
                                    <h3>Spa</h3>
                                    <h5>Massage | Facial</h5>
                                </motion.div>
                            </NavLink>

                        </div>
                        {/* second round */}
                        <div className='brackets'>
                            <NavLink to={"/fitness"}>
                                <motion.div
                                    initial={{
                                        y: -30,
                                        opacity: 0.4
                                    }}
                                    whileInView={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.3
                                    }}
                                    whileHover={{
                                        backgroundColor: "#bdbdbd",
                                    }}
                                    transition={{ duration: 1 }}
                                    className='bracket'>
                                    <h3>Fitness</h3>
                                    <h5>Open 24/7</h5>
                                </motion.div>
                            </NavLink>
                            <NavLink to={"/pool"}>
                                <motion.div
                                    initial={{
                                        y: -30,
                                        opacity: 0.4
                                    }}
                                    whileInView={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.3
                                    }}
                                    whileHover={{
                                        backgroundColor: "#bdbdbd",
                                    }}
                                    transition={{ duration: 1 }}
                                    className='bracket'>
                                    <h3>Infinity pool</h3>
                                    <h5>City skyline view</h5>
                                </motion.div>
                            </NavLink>
                        </div>
                    </div>
                    <motion.div
                        initial={{
                            x: 0,
                            opacity: 0.4,
                            scale: 0.9
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3
                        }}
                        transition={{ duration: 1 }}
                        className="sideinfo">
                        <h3>eCOM provides the best <br /> dining experience and amenities in the city</h3>
                        <img
                            className='sideinfo-image'
                            src="/dining.jpeg" alt="" />
                    </motion.div>
                </div>
            </div>
            {/* <Footer /> */}

        </>
    )
}

export default Frame

import React from 'react'
import { motion } from 'framer-motion'
import "./Pookie.css"

const Pool = () => {
    return (
        <>
            <h3 className='title'>Pool</h3>
            <div>
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
                    transition={{
                        duration: 1
                    }}
                    className='bg-grey'>
                    <img src="/spa.jpg" alt="" />
                    <p>
                        eCOM provide premium and luxurious Pool for our guests. Pool is a place where guests can unwind and relax.
                    </p>
                </motion.div>
            </div>
            <section className='portion'>
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
                    transition={{
                        duration: 1
                    }}
                    className="breakfast">
                    <img src="/spachair.jpg" alt="" />
                    <h2>Spa chairs</h2>
                    <div className='rating'>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <h5>(no reviews)</h5>
                    </div>
                    <p>
                        eCOM Premium Spa
                        <li>Fresh & Healthy</li>
                        <li>24/7</li>
                        <li>Massage</li>
                        <li>Body wash</li>
                    </p>
                </motion.div>
                {/* 2 */}
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
                    transition={{
                        duration: 1
                    }}
                    className="breakfast">
                    <img src="/spacomp.jpeg" alt="" />
                    <h2>Components</h2>
                    <div className='rating'>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <h5>(no reviews)</h5>
                    </div>
                    <p>
                        eCOM Premium Spa
                        <li>Organic</li>
                        <li>Room service</li>
                        <li>Healthy</li>
                        <li>Fresh & Healthy</li>
                    </p>
                </motion.div>
                {/* 3 */}
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
                    transition={{
                        duration: 1
                    }}
                    className="breakfast">
                    <img src="/spatubs.jpeg" alt="" />
                    <h2>Spa tubs</h2>
                    <div className='rating'>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <h5>(no reviews)</h5>
                    </div>
                    <p>
                        eCOM Premium Spa
                        <li>Healthy</li>
                        <li>24/7</li>
                        <li>Organic</li>
                        <li>Room service</li>
                    </p>
                </motion.div>
            </section>
        </>
    )
}

export default Pool

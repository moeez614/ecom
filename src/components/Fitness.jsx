import React from 'react'
import {motion} from 'framer-motion'
import "./Pookie.css"
const Fitness = () => {
  return (
    <>
    <h3 className='title'>Fitness</h3>
      <div>
        <motion.div
        initial={{ y:-30,
            opacity:0.4
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        viewport={{
            once:true,
            amount:0.3
        }}
        transition={{
            duration:1
        }}
        className='bg-grey'>
            <img src="/gym.webp" alt="" />
            <p>
                eCOM provide premium and luxurious gym for our guests. Gym is a place where guests can unwind and relax.
            </p>
        </motion.div>
      </div>
      <section className='portion'>
        <motion.div 
        initial={{ y:-30,
            opacity:0.4
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        viewport={{
            once:true,
            amount:0.3
        }}
        transition={{
            duration:1
        }}
        className="breakfast">
            <img src="/dumbells.jpg" alt="" />
            <h2>Gym equipments</h2>
            <div className='rating'>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <h5>(no reviews)</h5>
            </div>
            <p>
                eCOM Premium Gym 
                <li>Cardio machines</li>
                <li>Dumbells</li>
                <li>Treadmill</li>
                <li>Free weights</li>
            </p>
        </motion.div>
        {/* 2 */}
        <motion.div 
        initial={{ y:-30,
            opacity:0.4
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        viewport={{
            once:true,
            amount:0.3
        }}
        transition={{
            duration:1
        }}
        className="breakfast">
            <img src="/trainer.jpeg" alt="" />
            <h2>Gym Trainer</h2>
            <div className='rating'>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <h5>(no reviews)</h5>
            </div>
            <p>
                eCOM Premium Gym 
                <li>Coperative</li>
                <li>24/7</li>
                <li>well trained</li>
                <li>Free weights</li>
            </p>
        </motion.div>
        {/* 3 */}
        <motion.div 
        initial={{ y:-30,
            opacity:0.4
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        viewport={{
            once:true,
            amount:0.3
        }}
        transition={{
            duration:1
        }}
        className="breakfast">
            <img src="/restarea.jpg" alt="" />
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
                eCOM Premium Gym 
                <li>Rest & Refresh</li>
                <li>24/7</li>
                <li>Organic</li>
                <li>Pre Workout drink</li>
            </p>
        </motion.div>
      </section>
    </>
  )
}

export default Fitness

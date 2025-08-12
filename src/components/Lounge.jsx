import React from 'react'
import {motion} from 'framer-motion'
import "./Pookie.css"

const Lounge = () => {
  return (
    <>
      <h3 className='title'>Lounge</h3>
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
            <img src="/Lounge1.webp" alt="" />
            <p>
                eCOM provide premium and luxurious lounge for our guests. Lounge is a place where guests can unwind and relax. Lounge is a place where guests can unwind and relax. Lounge is a place where guests can unwind and relax.
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
            <img src="/breakfast.webp" alt="" />
            <h2>Breakfast</h2>
            <div className='rating'>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <h5>(no reviews)</h5>
            </div>
            <p>
                eCOM Premium Lounge 
                <li>Fresh & Healthy</li>
                <li>Delicious</li>
                <li>Room service</li>
                <li>Buffet</li>
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
            <img src="/lunch.jpeg" alt="" />
            <h2>Lunch</h2>
            <div className='rating'>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <h5>(no reviews)</h5>
            </div>
            <p>
                eCOM Premium Lounge 
                <li>Fresh & Healthy</li>
                <li>Delicious</li>
                <li>Room service</li>
                <li>Buffet</li>
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
            <img src="/dinner.jpg" alt="" />
            <h2>Dinner</h2>
            {/* <div className='rating'>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <h5>(no reviews)</h5>
            </div> */}
<div class="ratinge">
  <input type="radio" id="star-1" name="star-radio" value="star-1"/>
  <label for="star-1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
  </label>
  <input type="radio" id="star-2" name="star-radio" value="star-1"/>
  <label for="star-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
  </label>
  <input type="radio" id="star-3" name="star-radio" value="star-1"/>
  <label for="star-3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
  </label>
  <input type="radio" id="star-4" name="star-radio" value="star-1"/>
  <label for="star-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
  </label>
  <input type="radio" id="star-5" name="star-radio" value="star-1"/>
  <label for="star-5">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
  </label>
</div>
            <p>
                eCOM Premium Lounge 
                <li>Fresh & Healthy</li>
                <li>Delicious</li>
                <li>Room service</li>
                <li>Buffet</li>
            </p>
        </motion.div>
      </section>
    </>
  )
}

export default Lounge

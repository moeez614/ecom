import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"


const Dining = () => {
  return (
    <>
      <h2 className="title">Dining</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500
        }}
        loop={true}
        grabCursor={true}       // shows grab hand on desktop
        allowTouchMove={true}
        style={{ width: "100%", height: "200px" }}
      >

        <SwiperSlide><img src="/dining.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/spachair.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/trainer.jpeg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Dining

import React from "react"
import two from "../../Images/partner4.webp"
import three from "../../Images/partner2.webp"
import four from "../../Images/partner3.webp"
import five from "../../Images/partner5.webp"
import one from "../../Images/partner1.webp"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper React components

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./styles.css"

// import required modules
import { Autoplay, Pagination } from "swiper/modules"

const sildeImage = [one, two, three, four, five, one, two]

export const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {sildeImage.map(image => (
          <SwiperSlide>
            <img src={image} alt="No" width="100px" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
